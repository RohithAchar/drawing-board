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
  handleUndo,
  handleRedo,
  handleDelete,
  history,
  elements,
  handleToolBarToggleBtn,
}) => {
  const [selectedDiv, setSelectedDiv] = useState(1);
  return (
    <div className="absolute bg-white top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[500px] h-[60px] border-2 shadow-2xl rounded-lg mt-10 mx-auto flex justify-around align-center items-center px-4 z-20">
      <div className="flex gap-3">
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 1 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("pencil");
            setSelectedDiv(1);
            handleToolBarToggleBtn(true);
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
            handleToolBarToggleBtn(true);
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
            handleToolBarToggleBtn(true);
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
            handleToolBarToggleBtn(true);
          }}
        >
          <FontAwesomeIcon className="ml-2 mt-2" icon={faCircle} size="lg" />
        </div>
        <div
          className={`border-2 h-[40px] w-[40px] rounded-lg cursor-pointer ${
            selectedDiv === 5 && "bg-neutral text-white"
          }`}
          onClick={() => {
            handleSelectTool("text");
            setSelectedDiv(5);
          }}
        >
          <svg
            className="mt-1.5 ml-1.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="6" y1="2" x2="18" y2="2" />
          </svg>
        </div>
      </div>
      <div className="flex gap-3">
        <div
          className="border-2 h-[40px] w-[40px] rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={elements.length !== 0 && handleUndo}
        >
          <FontAwesomeIcon
            className="ml-2 mt-2"
            icon={faRotateLeft}
            size="lg"
          />
        </div>
        <div
          className="border-2 h-[40px] w-[40px] rounded-lg cursor-pointer hover:bg-slate-100"
          onClick={history.length > 0 && handleRedo}
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
