import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "../utility/getSvgPathFromStroke";
import { useState } from "react";

const Canvas = () => {
  const [points, setPoints] = useState([]);
  const [allPath, setAllPath] = useState([]);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    setPoints([[e.pageX, e.pageY, e.pressure]]);
  };
  const handlePointerMove = (e) => {
    if (e.buttons !== 1) return;
    setPoints([...points, [e.pageX, e.pageY, e.pressure]]);
  };
  const handlePointerUp = () => {
    setAllPath((previous) => [...previous, getSvgPathFromStroke(stroke)]);
  };

  const stroke = getStroke(points, {
    size: 12,
    thinning: 0.5,
    smoothing: 0.5,
    streamline: 0.5,
  });
  const pathData = getSvgPathFromStroke(stroke);

  return (
    <svg
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="w-screen h-screen"
    >
      <path d={pathData} />
      {allPath.map((data, index) => {
        return <path key={index} d={data} />;
      })}
    </svg>
  );
};

export default Canvas;
