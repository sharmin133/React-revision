import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const[count,setCount]=useState(0)

    const handleCount=()=>{
        const newCount=count+1;
        setCount(newCount);

    }

    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={handleCount} >Add</button>
        </div>
    );
};

export default Counter;