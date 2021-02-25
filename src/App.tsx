import React, { useCallback, useEffect, useState } from "react";

// const width = window.innerWidth;
// const height = window.innerHeight;

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const circleRadius = 10;
  const initialMousePosition = { x: 0, y: 0 };
  const initialRectPosition = { x: width/2, y: height/2 };
  const initialRectDimensions = { width: 100, height: 100 };
  
  const [mousePos, setMousePos] = useState(initialMousePosition);
  const [rectPos, setRectPos] = useState(initialRectPosition);
  const [rectDim, setRectDim] = useState(initialRectDimensions);
 

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions); //unmount
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });


      if((mousePos.x >= rectPos.x && mousePos.x <= rectPos.x +rectDim.width) && (mousePos.x >= rectPos.y && mousePos.y <= rectPos.y - rectDim.height)) {
        console.log('hit')
      }


    },
    [mousePos, rectDim, rectPos]
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePos.x} cy={mousePos.y} r={circleRadius} />
      <rect x={rectPos.x} y={rectPos.y} width={rectDim.width} height={rectDim.height}/>
    </svg>
  );
};

export default App;
