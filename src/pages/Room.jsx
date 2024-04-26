import { useState } from "react";
import ToolBar from "../components/ToolBar";
import WhiteBoard from "../components/WhiteBoard";

const Room = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("black");
  const [thickness, setThickness] = useState(14);
  console.log(tool);
  console.log(color);
  console.log("Thickness: ", thickness);
  return (
    <div className="relative">
      <ToolBar
        handleSelectTool={setTool}
        handleColor={setColor}
        handleThickness={setThickness}
        getThickness={thickness}
      />
      <WhiteBoard />
    </div>
  );
};

export default Room;
