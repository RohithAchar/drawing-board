import { useEffect, useState } from "react";
import rough from "roughjs";

const WhiteBoard = ({
  canvasRef,
  ctxRef,
  elements,
  setElements,
  color,
  thickness,
  tool,
  getFill,
  getFillStyle,
  getFillWeight,
}) => {
  const [drawing, setDrawing] = useState(false);
  const [isText, setIsText] = useState(false);
  const [cursor, setCursor] = useState("cursor-crosshair");

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
          roughness: 0,
          seed: 5,
        });
      } else if (element.type === "line") {
        roughCanvas.line(...element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          roughness: 1,
          seed: 5,
        });
      } else if (element.type === "rectangle") {
        roughCanvas.rectangle(...element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          bowing: 1,
          seed: element.seed,
          fill: element.fill,
          fillStyle: element.fillStyle,
          fillWeight: element.fillWeight,
          roughness: 2,
        });
      } else if (element.type === "circle") {
        roughCanvas.circle(...element.path, {
          stroke: element.stroke,
          strokeWidth: element.strokeWidth,
          bowing: 1,
          roughness: 1,
          seed: element.seed,
          fill: element.fill,
          fillStyle: element.fillStyle,
          fillWeight: element.fillWeight,
        });
      } else if (element.type === "text") {
        ctxRef.current.fillStyle = element.color;
        ctxRef.current.font = element.font;
        ctxRef.current.fillText(element.text, element.clientX, element.clientY);
      }
    });
  }, [elements]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    setCursor("cursor-crosshair");
    setIsText(false);
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
    } else if (tool == "rectangle") {
      setElements((previous) => [
        ...previous,
        {
          type: tool,
          clientX,
          clientY,
          path: [clientX, clientY],
          stroke: color,
          strokeWidth: thickness,
          fill: getFill,
          fillStyle: getFillStyle,
          fillWeight: getFillWeight,
          seed: 5,
        },
      ]);
    } else if (tool == "circle") {
      setElements((previous) => [
        ...previous,
        {
          type: tool,
          clientX,
          clientY,
          path: [clientX, clientY],
          stroke: color,
          strokeWidth: thickness,
          fill: getFill,
          fillStyle: getFillStyle,
          fillWeight: getFillWeight,
          seed: 5,
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
      } else if (tool == "rectangle") {
        const { path } = elements[arrLength - 1];
        const newPath = path;
        newPath[2] = clientX - newPath[0];
        newPath[3] = clientY - newPath[1];
        setElements((previousEle) => {
          return previousEle.map((ele, index) => {
            if (index == arrLength - 1) {
              return { ...ele, path: newPath };
            } else return ele;
          });
        });
      } else if (tool == "circle") {
        const { path } = elements[arrLength - 1];
        const newPath = path;
        newPath[2] = clientX - newPath[0] + clientY - newPath[1];
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
  const handleDoubleClick = (e) => {
    if (tool == "text" && isText) setIsText(false);
    if (tool == "text") {
      setCursor("cursor-text");
      setIsText(true);
      const { clientX, clientY } = e;
      setElements((previous) => [
        ...previous,
        {
          type: "text",
          font: `${thickness}rem Caveat`,
          color: color,
          text: "",
          clientX,
          clientY,
        },
      ]);
    }
  };
  const handleKeyDown = (e) => {
    if (isText) {
      const lastTextIndex = elements.length - 1;
      if (e.key == "Backspace") {
        setElements((previousEle) => {
          return previousEle.map((ele, index) => {
            if (index == lastTextIndex) {
              return { ...ele, text: ele.text.slice(0, -1) };
            } else return ele;
          });
        });
      }
      if (e.key.length !== 1) return;
      setElements((previousEle) => {
        return previousEle.map((ele, index) => {
          if (index == lastTextIndex) {
            return { ...ele, text: ele.text + e.key };
          } else return ele;
        });
      });
    }
  };

  return (
    <>
      <canvas
        tabIndex={0}
        ref={canvasRef}
        className={`z-[-10] ${cursor}`}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onKeyDown={handleKeyDown}
        onDoubleClick={handleDoubleClick}
      ></canvas>
    </>
  );
};

export default WhiteBoard;
