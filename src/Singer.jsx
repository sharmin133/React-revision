import React from 'react';

const Singer = ({singer}) => {
    
    return (
        <div>
            <h2>name:{singer.name}</h2>
            <p>age:{singer.age}</p>
        </div>
    );
};

export default Singer;