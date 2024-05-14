import React, { useState } from "react";

const ToolProperties = ({
  handleColor,
  handleThickness,
  getThickness,
  getColor,
}) => {
  const [selectedColorDiv, setSelectedColorDiv] = useState(1);
  return (
    <div className="absolute top-52 border-2">
      <div>
        <p>Stroke</p>
        <div className="flex flex-row">
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#1e1e1e] ${
              selectedColorDiv === 1 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedColorDiv(1);
              handleColor("#1e1e1e");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#e03131] ${
              selectedColorDiv === 2 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedColorDiv(2);
              handleColor("#e03131");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#2e9f44] ${
              selectedColorDiv === 3 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedColorDiv(3);
              handleColor("#2e9f44");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#1971c2] ${
              selectedColorDiv === 4 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedColorDiv(4);
              handleColor("#1971c2");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#f08c00] ${
              selectedColorDiv === 5 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedColorDiv(5);
              handleColor("#f08c00");
            }}
          ></div>
          <div className="w-2"></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getColor}]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ToolProperties;
