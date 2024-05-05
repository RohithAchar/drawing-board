import React, { useEffect, useState } from "react";
import {
  faCircle,
  faPencil,
  faRotateLeft,
  faRotateRight,
  faSlash,
  faSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolBar = ({
  handleSelectTool,
  handleColor,
  handleThickness,
  getThickness,
  getColor,
  handleUndo,
  handleRedo,
  handleDelete,
}) => {
  const [selectedDiv, setSelectedDiv] = useState(1);
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[700px] h-[60px] shadow-2xl rounded-lg mt-10 mx-auto flex justify-between align-center items-center px-4 z-20">
      <div className="flex gap-3">
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 1 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("pencil");
            setSelectedDiv(1);
          }}
        >
          <FontAwesomeIcon className="ml-2 mt-2" icon={faPencil} size="lg" />
        </div>
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 2 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("line");
            setSelectedDiv(2);
          }}
        >
          {" "}
          <FontAwesomeIcon className="ml-2 mt-2" icon={faSlash} size="lg" />
        </div>
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 3 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("rectangle");
            setSelectedDiv(3);
          }}
        >
          <FontAwesomeIcon
            className="ml-[8.5px] mt-2"
            icon={faSquare}
            size="lg"
          />
        </div>
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 4 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("circle");
            setSelectedDiv(4);
          }}
        >
          <FontAwesomeIcon className="ml-2 mt-2" icon={faCircle} size="lg" />
        </div>
      </div>
      <div className="flex gap-3">
        {/* <div className="h-[40px] w-[40px] rounded-lg border-2"> */}
        <input
          className="w-[40px] h-[40px] cursor-pointer"
          type="color"
          name="color"
          id="color"
          value={getColor}
          onChange={(e) => handleColor(e.target.value)}
        />
        {/* </div> */}

        <select
          className="select"
          onChange={(e) => handleThickness(e.target.value)}
          value={getThickness}
        >
          <option disabled>Thickness</option>
          <option value="1" className="text-xs">
            Thickness
          </option>
          <option value="2" className="text-sm">
            Thickness
          </option>
          <option value="3" className="text-base">
            Thickness
          </option>
          <option value="4" className="text-lg">
            Thickness
          </option>
          <option value="5" className="text-xl">
            Thickness
          </option>
          <option value="6" className="text-2xl">
            Thickness
          </option>
          <option value="7" className="text-3xl">
            Thickness
          </option>
          <option value="8" className="text-4xl">
            Thickness
          </option>
          <option value="9" className="text-5xl">
            Thickness
          </option>
          <option value="10" className="text-6xl">
            Thickness
          </option>
          <option value="11" className="text-7xl">
            Thickness
          </option>
          <option value="12" className="text-8xl">
            Thickness
          </option>
          {/* <option values="128" className="text-9xl">
            Thickness
          </option> */}
        </select>
      </div>
      <div className="flex gap-3">
        <div
          className="border-2 h-[40px] w-[40px] rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={handleUndo}
        >
          <FontAwesomeIcon
            className="ml-2 mt-2"
            icon={faRotateLeft}
            size="lg"
          />
        </div>
        <div
          className="border-2 h-[40px] w-[40px] rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={handleRedo}
        >
          <FontAwesomeIcon
            className="ml-2 mt-2"
            icon={faRotateRight}
            size="lg"
          />
        </div>
        <div
          className="border-2 h-[40px] w-[40px] rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={handleDelete}
        >
          <FontAwesomeIcon className="ml-2 mt-2" icon={faTrash} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
