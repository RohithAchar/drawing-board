import React, { useState } from "react";

// Backgrounds
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
const HatchPattern = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern
        id="hatchPattern"
        patternUnits="userSpaceOnUse"
        width="8"
        height="8"
      >
        <path
          d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2"
          stroke="black"
          stroke-width="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hatchPattern)" />
  </svg>
);
const ZigzagPattern = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern
        id="zigzagPattern"
        patternUnits="userSpaceOnUse"
        width="10"
        height="10"
      >
        <path
          d="M0 10 l20 -10 l20 10 l20 -10 l20 10"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#zigzagPattern)" />
  </svg>
);
const CrossHatchPattern = () => {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="crossHatchPattern"
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
        >
          <path
            d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2 M-1,9 l2,-2 M0,2 l8,8 M7,1 l2,-2"
            stroke="black"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#crossHatchPattern)" />
    </svg>
  );
};
const Dashed = () => {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="dashedPattern"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
        >
          <line
            x1="0"
            y1="4"
            x2="8"
            y2="4"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4,2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dashedPattern)" />
    </svg>
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
    <div className="absolute left-4 top-52 border-2 bg-white p-4 rounded-lg shadow-lg">
      {/* STROKE */}
      <div className="mb-4 mt-4">
        <p className="text-xs m-0.5">Stroke</p>
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
      <div className="mb-4">
        <p className="text-xs m-0.5">Fill</p>
        <div className="flex flex-row">
          <div
            className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[] ${
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
        <div className="mb-4">
          <p className="text-xs m-0.5">Fill Style</p>
          <div className="flex flex-row">
            <div
              className={`m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}] ${
                selectedFillStyleDiv === 1 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(1);
                handleFillStyle("solid");
              }}
            ></div>
            <div
              className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}] ${
                selectedFillStyleDiv === 2 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(2);
                handleFillStyle("hachure");
              }}
            >
              <HatchPattern />
            </div>
            <div
              className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}] ${
                selectedFillStyleDiv === 3 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(3);
                handleFillStyle("zigzag");
              }}
            >
              <ZigzagPattern />
            </div>
            <div
              className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}] ${
                selectedFillStyleDiv === 4 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(4);
                handleFillStyle("cross-hatch");
              }}
            >
              <CrossHatchPattern />
            </div>
            <div
              className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}] ${
                selectedFillStyleDiv === 5 &&
                "outline outline-offset-2 outline-1"
              }`}
              onClick={() => {
                setSelectedFillStyleDiv(5);
                handleFillStyle("dashed");
              }}
            >
              <Dashed />
            </div>
            <div className="w-2"></div>
            <div
              className={`relative overflow-hidden m-1 h-[25px] w-[25px] rounded-md cursor-pointer bg-[${getFill}]`}
            >
              {selectedFillStyleDiv === 1 && ""}
              {selectedFillStyleDiv === 2 && <HatchPattern />}
              {selectedFillStyleDiv === 3 && <ZigzagPattern />}
              {selectedFillStyleDiv === 4 && <CrossHatchPattern />}
              {selectedFillStyleDiv === 5 && <Dashed />}
            </div>
          </div>
        </div>
      )}
      {/* THICKNESS */}
      <div className="mb-4">
        <p className="text-xs m-0.5">Thickness</p>
        <input
          type="range"
          min={1}
          max="10"
          value={getThickness}
          className="range range-xs m-0.5"
          onChange={(e) => handleThickness(e.target.value)}
        />
      </div>
      {/* Bowing */}
      <div className="mb-4">
        <p className="text-xs m-0.5">Bowing</p>
        <input
          type="range"
          min={0}
          max="5"
          value={getBowing}
          className="range range-xs m-0.5"
          onChange={(e) => handleBowing(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ToolProperties;
