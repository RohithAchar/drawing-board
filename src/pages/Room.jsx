import { useEffect, useRef, useState } from "react";
import ToolBar from "../components/ToolBar";
import WhiteBoard from "../components/WhiteBoard";

const Room = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#333333");
  const [thickness, setThickness] = useState(4);
  const [elements, setElements] = useState([]);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  // console.log(tool);
  // console.log(color);
  // console.log("Thickness: ", thickness);

  const handleUndo = () => {
    console.log("undo");
  };
  const handleRedo = () => {
    console.log("Redo");
  };
  const handleDelete = () => {
    console.log("delete");
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
      />
      <WhiteBoard
        canvasRef={canvasRef}
        ctxRef={ctxRef}
        elements={elements}
        setElements={setElements}
        color={color}
        thickness={thickness}
      />
    </div>
  );
};

export default Room;
