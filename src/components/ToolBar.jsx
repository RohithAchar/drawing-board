import React, { useEffect, useState } from "react";
import { faPencil, faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolBar = ({ handleSelectTool, handleColor }) => {
  const [selectedDiv, setSelectedDiv] = useState(1);
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[700px] h-[60px] shadow-2xl rounded-lg mt-10 mx-auto flex justify-between align-center items-center px-4 z-10">
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
        <div className="bg-black h-[40px] w-[40px] rounded-lg"></div>
        <div className="bg-black h-[40px] w-[40px] rounded-lg"></div>
      </div>
      <div className="flex gap-3">
        {/* <div className="h-[40px] w-[40px] rounded-lg border-2"> */}
        <input
          className="w-[40px] h-[40px] cursor-pointer"
          type="color"
          name="color"
          id="color"
          onChange={(e) => handleColor(e.target.value)}
        />
        {/* </div> */}
        <select className="select">
          <option disabled selected>
            Thickness
          </option>
          <option className="text-xs">____</option>
          <option className="text-sm">____</option>
          <option className="text-base">____</option>
          <option className="text-lg">____</option>
          <option className="text-2xl">____</option>
          <option className="text-3xl">____</option>
          <option className="text-4xl">____</option>
          <option className="text-5xl">____</option>
          <option className="text-6xl">____</option>
          <option className="text-7xl">____</option>
          <option className="text-8xl">____</option>
          <option className="text-9xl">____</option>
        </select>
      </div>
      <div className="flex gap-3">
        <div className="bg-black h-[40px] w-[40px] rounded-lg"></div>
        <div className="bg-black h-[40px] w-[40px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default ToolBar;
