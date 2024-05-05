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
  console.log(elements);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    const roughCanvas = rough.canvas(canvasRef.current);
    if (elements.length > 0) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
    elements.forEach((element) => {
      if (element.type == "pencil") {
        roughCanvas.linearPath(element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          roughness: 0.5,
        });
      } else if (element.type === "line") {
        roughCanvas.line(...element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          roughness: 0.5,
        });
      }
    });
  }, [elements]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    const { clientX, clientY } = e;
    if (tool == "pencil") {
      setElements((previous) => [
        ...previous,
        {
          type: tool,
          clientX,
          clientY,
          path: [[clientX, clientY]],
          stroke: color,
          strokeWidth: thickness,
        },
      ]);
    } else if (tool == "line") {
      setElements((previous) => [
        ...previous,
        {
          type: tool,
          clientX,
          clientY,
          path: [clientX, clientY],
          stroke: color,
          strokeWidth: thickness,
        },
      ]);
    }
  };
  const handleMouseMove = (e) => {
    if (drawing) {
      const { clientX, clientY } = e;
      const arrLength = elements.length;
      if (tool == "pencil") {
        const { path } = elements[arrLength - 1];
        const newPath = [...path, [clientX, clientY]];

        setElements((previousEle) => {
          return previousEle.map((ele, index) => {
            if (index == arrLength - 1) {
              return { ...ele, path: newPath };
            } else return ele;
          });
        });
      } else if (tool == "line") {
        const { path } = elements[arrLength - 1];
        const newPath = path;
        newPath[2] = clientX;
        newPath[3] = clientY;
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
