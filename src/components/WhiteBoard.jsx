import React, { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const roughGenerator = rough.generator();

const WhiteBoard = ({
  canvasRef,
  ctxRef,
  elements,
  setElements,
  color,
  thickness,
  tool,
}) => {
  const [drawing, setDrawing] = useState(false);
  console.log(thickness);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    if (tool == "pencil") {
      const roughCanvas = rough.canvas(canvasRef.current);
      elements.forEach((element) => {
        roughCanvas.linearPath(element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          roughness: 0.5,
        });
      });
    }
  }, [elements]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    const { clientX, clientY } = e;
    if (tool == "pencil") {
      setElements((previous) => [
        ...previous,
        {
          type: "pencil",
          clientX,
          clientY,
          path: [[clientX, clientY]],
          stroke: color,
          strokeWidth: thickness,
        },
      ]);
    }
  };
  const handleMouseMove = (e) => {
    if (drawing) {
      const { clientX, clientY } = e;
      if (tool == "pencil") {
        const arrLength = elements.length;
        //Static pencil
        const { path } = elements[arrLength - 1];
        const newPath = [...path, [clientX, clientY]];

        setElements((previousEle) => {
          return previousEle.map((ele, index) => {
            if (index == arrLength - 1) {
              return { ...ele, path: newPath };
            } else return ele;
          });
        });
      }
    }
  };
  const handleMouseUp = (e) => {
    setDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      className="z-10"
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    ></canvas>
  );
};

export default WhiteBoard;
