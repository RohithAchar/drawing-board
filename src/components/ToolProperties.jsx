import React, { useState } from "react";

const TransparentDiv = () => {
  return (
    <>
      <div className="absolute w-2 h-2 bg-slate-400"></div>
      <div className="absolute w-2 h-2 bg-slate-400 left-2 top-2"></div>
      <div className="absolute w-2 h-2 bg-slate-400 left-4 top-4"></div>
      <div className="absolute w-2 h-2 bg-slate-400 left-4"></div>
      <div className="absolute w-2 h-2 bg-slate-400 top-4"></div>
    </>
  );
};

const ToolProperties = ({
  handleColor,
  handleThickness,
  getThickness,
  getColor,
  handleFill,
  getFill,
  handleBowing,
  getBowing,
  handleFillStyle,
  getFillStyle,
}) => {
  const [selectedColorDiv, setSelectedColorDiv] = useState(1);
  const [selectedFillDiv, setSelectedFillDiv] = useState(1);
  const [selectedFillStyleDiv, setSelectedFillStyleDiv] = useState(1);

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
            className={`relative m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[] ${
              selectedFillDiv === 1 && "outline outline-offset-2 outline-1"
            }`}
            onClick={() => {
              setSelectedFillDiv(1);
              handleFill("");
            }}
          >
            <TransparentDiv />
          </div>
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
            className={`relative m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}]`}
          >
            {selectedFillDiv === 1 && <TransparentDiv />}
          </div>
        </div>
      </div>
      {/* FILL STYLE */}
      {selectedFillDiv > 1 && (
        <div>
          <p>Fill Style</p>
          <div className="flex flex-row">
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-black ${
                selectedFillStyleDiv === 1 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(1);
                handleFillStyle("solid");
              }}
            ></div>
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#ffc9c9] ${
                selectedFillStyleDiv === 2 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(2);
                handleFillStyle("hachure");
              }}
            ></div>
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#b2f2bb] ${
                selectedFillStyleDiv === 3 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(3);
                handleFillStyle("zigzag");
              }}
            ></div>
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#a5d8ff] ${
                selectedFillStyleDiv === 4 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(4);
                handleFillStyle("cross-hatch");
              }}
            ></div>
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[#ffec99] ${
                selectedFillStyleDiv === 5 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(5);
                handleFillStyle("dashed");
              }}
            ></div>
            <div className="w-2"></div>
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}]`}
            ></div>
          </div>
        </div>
      )}
      {/* THICKNESS */}
      <div>
        <p>Thickness</p>
        <input
          type="range"
          min={1}
          max="10"
          value={getThickness}
          className="range range-xs"
          onChange={(e) => handleThickness(e.target.value)}
        />
      </div>
      {/* Bowing */}
      <div>
        <p>Bowing</p>
        <input
          type="range"
          min={0}
          max="5"
          value={getBowing}
          className="range range-xs"
          onChange={(e) => handleBowing(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ToolProperties;
