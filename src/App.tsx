import React, { useCallback, useEffect, useState } from "react";

// const width = window.innerWidth;
// const height = window.innerHeight;

const App = () => {
  const circleRadius = 10;
  const initialMousePosition = { x: 0, y: 0 };
  const [mousePos, setMousePos] = useState(initialMousePosition);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      console.log(event.clientX);
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });
    },
    [setMousePos]
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePos.x} cy={mousePos.y} r={circleRadius} />
    </svg>
  );
};

export default App;
