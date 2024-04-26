import { useState } from "react";
import ToolBar from "../components/ToolBar";
import WhiteBoard from "../components/WhiteBoard";

const Room = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("black");
  console.log(tool);
  console.log(color);
  return (
    <div className="relative">
      <ToolBar handleSelectTool={setTool} handleColor={setColor} />
      <WhiteBoard />
    </div>
  );
};

export default Room;
