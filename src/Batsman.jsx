import React from 'react';
import { useState } from 'react';

const Batsman = () => {

    const[runs,setRuns]=useState(0);

    const handleSingle=()=>{
       const newScore=runs+1;
       setRuns(newScore);
    }

const handleFour=()=>{
    const newScore=runs+4;
    setRuns(newScore)
}

const handleSix=()=>{
    const newScore=runs+6;
    setRuns(newScore);
}

    return (
        <div>
            <h2>Batsman Name: Bangla Batsman</h2>
            <p>Score:{runs}</p>
            <button onClick={handleSingle} >single</button>
            <button onClick={handleFour} >four</button>
            <button onClick={handleSix} >six</button>

        </div>
    );
};

export default Batsman;