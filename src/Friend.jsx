import React from 'react';

const Friend = ({friend}) => {
    return (
        <div>
            <h2>name:{friend.name}</h2>
            <p>email: {friend.email}     </p>
        </div>
    );
};

export default Friend;