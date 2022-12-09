
import React, { useState } from 'react';

import Draggable from "react-draggable";
import "./App.css";

function App() {
    const [numCircles, setNumCircles] = useState(1);
    const [numSquares, setNumSquares] = useState(1);
  
    const AddCircle = () => {
      setNumCircles(numCircles + 1);
    };
  
    const ResetCircle = () => {
      setNumCircles(1);
    };
  
    const AddSquare = () => {
      setNumSquares(numSquares + 1);
    };
  
    const ResetSquare = () => {
      setNumSquares(1);
    };

  return (
    <div className="container">
        

        <div>
        <p>Number of circles: {numCircles}</p>
        <button onClick={AddCircle}>Add circle</button>
        <button onClick={ResetCircle}>Reset circle</button>
      </div>
      <div>
        <p>Number of squares: {numSquares}</p>
        <button onClick={AddSquare}>Add square</button>
        <button onClick={ResetSquare}>Reset square</button>
      </div>
      <Draggable>
        <div className="square" style={{position: 'relative'}}>
          
        </div>
      </Draggable>
      <Draggable>
        <div className="circle" style={{position: 'relative'}}>
          
        </div>
      </Draggable>
    </div>
  );
}

export default App;