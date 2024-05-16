import React from "react";

const ToolBarToggleBtn = ({ handleToggle, isOpen }) => {
  return (
    <div className="absolute top-7 left-6">
      <button
        className="btn btn-square btn-ghost shadow-lg border-2 bg-slate-100"
        onClick={() => handleToggle((previous) => !previous)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>
    </div>
  );
};

export default ToolBarToggleBtn;
