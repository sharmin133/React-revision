import React from 'react';

const ToDo = ({task,isDone}) => {
    // if(isDone===true){
    //     return (
    //     <div>
    //         <h2> task:{task}</h2>
            
    //     </div>
    // );
    // }
    // else{
    //     return(
    //         <div>
    //         <h2>task:{task}</h2>
    //         </div>
        
    //     )
    // }

    // return isDone===true? <li>task done {task}</li>: <li>task not done {task}</li>

    //  return isDone && <li>task done {task}</li>
    return isDone || <li>task done {task}</li>
};

export default ToDo;