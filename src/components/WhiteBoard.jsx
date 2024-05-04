import React, { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs";

const roughGenerator = rough.generator();

const WhiteBoard = ({ canvasRef, ctxRef, elements, setElements }) => {
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    const roughCanvas = rough.canvas(canvasRef.current);
    console.log(roughCanvas);
    elements.forEach((element) => {
      roughCanvas.linearPath(element.path);
    });
  }, [elements]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    const { clientX, clientY } = e;
    setElements((previous) => [
      ...previous,
      {
        type: "pencil",
        clientX,
        clientY,
        path: [[clientX, clientY]],
        stroke: "#333333",
      },
    ]);
  };
  const handleMouseMove = (e) => {
    if (drawing) {
      const { clientX, clientY } = e;
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
  };
  const handleMouseUp = (e) => {
    setDrawing(false);
    //console.log(e.clientX, e.clientY);
  };

  return (
    <canvas
      ref={canvasRef}
      // className="w-screen h-screen"
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    ></canvas>
  );
};

export default WhiteBoard;
