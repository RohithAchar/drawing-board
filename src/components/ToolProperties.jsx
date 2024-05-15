import React, { useState } from "react";

const ToolProperties = ({
  handleColor,
  handleThickness,
  getThickness,
  getColor,
  handleFill,
  getFill,
}) => {
  const [selectedColorDiv, setSelectedColorDiv] = useState(1);
  const [selectedFillDiv, setSelectedFillDiv] = useState(1);
  return (
    <div className="absolute top-52 border-2 bg-white">
      {/* STROKE */}
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
      {/* FILL */}
      <div>
        <p>Fill</p>
        <div className="flex flex-row">
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[] ${
              selectedFillDiv === 1 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(1);
              handleFill("");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#ffc9c9] ${
              selectedFillDiv === 2 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(2);
              handleFill("#ffc9c9");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#b2f2bb] ${
              selectedFillDiv === 3 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(3);
              handleFill("#b2f2bb");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#a5d8ff] ${
              selectedFillDiv === 4 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(4);
              handleFill("#a5d8ff");
            }}
          ></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#ffec99] ${
              selectedFillDiv === 5 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(5);
              handleFill("#ffec99");
            }}
          ></div>
          <div className="w-2"></div>
          <div
            className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ToolProperties;
