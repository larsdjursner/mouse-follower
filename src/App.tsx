import React, { useCallback, useState } from "react";


const width = window.innerWidth;
const height = window.innerHeight;
const circleRadius = 10;
const initialMousePosition = { x:0, y:0 };

const App = () => {
  const [mousePos, setMousePos] = useState(initialMousePosition);

  const handleMouseMove = useCallback((event) => {
    console.log(event.clientX);
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  },[setMousePos]);

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePos.x} cy={mousePos.y} r={circleRadius} />
    </svg>
  );
};

export default App;
