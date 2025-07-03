import React, { use } from 'react';
import Friend from './Friend';

const Users = ({friendsPromise}) => {
    const friends=use(friendsPromise);
  

    return (
        <div>
            <h2>friends:{friends.length}</h2>
            {
                friends.map(friend=><Friend keys={friend.id} friend={friend}></Friend>)
            }
            
        </div>
    );
};

export default Users;