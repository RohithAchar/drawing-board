import { useEffect, useRef, useState } from "react";
import ToolBar from "../components/ToolBar";
import WhiteBoard from "../components/WhiteBoard";
import ToolProperties from "../components/ToolProperties";
import ToolBarToggleBtn from "../components/ToolBarToggleBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Room = ({ socket, user, activeUsers }) => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#1e1e1e");
  const [thickness, setThickness] = useState(2);
  const [fill, setFill] = useState("");
  const [fillStyle, setFillStyle] = useState("solid");
  const [fillWeight, setFillWeight] = useState(1);
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [isToolPropertyOpen, setIsToolPropertyOpen] = useState(true);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const joinedUser = activeUsers[activeUsers.length - 1];
    if (!(user && joinedUser)) return;
    if (joinedUser.userID != user.userID && joinedUser.roomId == user.roomId) {
      toast(`${joinedUser.userName} has joined`, {
        type: "default",
      });
    }
  }, [activeUsers]);

  // useEffect(() => {
  //   toast(`Welcome ${user.userName}!`, {
  //     type: "success",
  //   });
  // }, []);

  useEffect(() => {
    socket.on("clearRes", handleClearFromServer);
    socket.on("undoRes", handleUndoFromServer);
    socket.on("redoRes", handleRedoFromServer);
    return () => {
      socket.off("undoRes", handleUndoFromServer);
      socket.off("redoRef", handleRedoFromServer);
      socket.off("clearRes", handleClearFromServer);
    };
  }, [user]);

  const handleClearFromServer = () => {
    const ctx = ctxRef.current;
    setElements([]);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };
  const handleUndoFromServer = (data) => {
    if (data.user.userID != user.userID) {
      if (data.elements.length === 0) return;
      if (data.elements.length === 1) {
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
      setHistory((previousHistory) => [
        ...previousHistory,
        data.elements[data.elements.length - 1],
      ]);
      setElements([...data.elements.slice(0, -1)]);
    }
  };
  const handleRedoFromServer = (data) => {
    if (data.user.userID != user.userID) {
      if (data.history.length === 0) return;
      setElements(() => {
        return [...data.elements, data.history[data.history.length - 1]];
      });
      setHistory((previousHistory) =>
        previousHistory.slice(0, previousHistory.length - 1)
      );
    }
  };

  const handleUndo = () => {
    if (elements.length === 0) return;
    if (elements.length === 1) {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    setHistory((previousHistory) => {
      return [...previousHistory, elements[elements.length - 1]];
    });
    setElements((previousElements) =>
      previousElements.slice(0, previousElements.length - 1)
    );
    socket.emit("undo", { user, elements });
  };
  const handleRedo = () => {
    if (history.length === 0) return;
    setElements((previousElement) => [
      ...previousElement,
      history[history.length - 1],
    ]);
    setHistory((previousHistory) =>
      previousHistory.slice(0, previousHistory.length - 1)
    );
    socket.emit("redo", { user, elements, history });
  };
  const handleDelete = () => {
    const ctx = ctxRef.current;
    setElements([]);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    socket.emit("clear", user);
  };

  return (
    <div className="relative">
      <ToastContainer />
      <ToolBar
        handleSelectTool={setTool}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        handleDelete={handleDelete}
        history={history}
        elements={elements}
        handleToolBarToggleBtn={setIsToolPropertyOpen}
      />
      {isToolPropertyOpen && (
        <ToolProperties
          handleColor={setColor}
          handleThickness={setThickness}
          getThickness={thickness}
          getColor={color}
          handleFill={setFill}
          getFill={fill}
          handleFillStyle={setFillStyle}
          getFillStyle={fillStyle}
          getFillWeight={fillWeight}
          handleFillWeight={setFillWeight}
          selectedTool={tool}
        />
      )}
      <WhiteBoard
        canvasRef={canvasRef}
        ctxRef={ctxRef}
        elements={elements}
        setElements={setElements}
        color={color}
        thickness={thickness}
        tool={tool}
        getFill={fill}
        getFillStyle={fillStyle}
        getFillWeight={fillWeight}
        socket={socket}
        user={user}
      />
      {/* <ToolBarToggleBtn
        handleToggle={setIsToolPropertyOpen}
        isOpen={isToolPropertyOpen}
      /> */}
    </div>
  );
};

export default Room;
