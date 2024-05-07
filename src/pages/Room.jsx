import { useEffect, useRef, useState } from "react";
import ToolBar from "../components/ToolBar";
import WhiteBoard from "../components/WhiteBoard";

const Room = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#333333");
  const [thickness, setThickness] = useState(4);
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  // console.log(tool);
  // console.log(color);
  // console.log("Thickness: ", thickness);

  const handleUndo = () => {
    if (elements.length === 0) return;
    if (elements.length === 1) {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    setHistory((previousHistory) => [
      ...previousHistory,
      elements[elements.length - 1],
    ]);
    setElements((previousElements) =>
      previousElements.slice(0, previousElements.length - 1)
    );
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
  };
  const handleDelete = () => {
    const ctx = ctxRef.current;
    setElements([]);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  return (
    <div className="relative">
      <ToolBar
        handleSelectTool={setTool}
        handleColor={setColor}
        handleThickness={setThickness}
        getThickness={thickness}
        getColor={color}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        handleDelete={handleDelete}
        history={history}
        elements={elements}
      />
      <WhiteBoard
        canvasRef={canvasRef}
        ctxRef={ctxRef}
        elements={elements}
        setElements={setElements}
        color={color}
        thickness={thickness}
        tool={tool}
      />
    </div>
  );
};

export default Room;
