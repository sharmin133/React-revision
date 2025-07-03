
import './App.css'
import ToDo from './ToDo'
import Person from './Person'
import Singer from './Singer';
import Counter from './Counter';
import Batsman from './Batsman';
import Fetch from './Fetch';
import Users from './Users';
import { Suspense, useEffect, useState } from 'react';
import Friend from './Friend';


  // const friendsFetch=async()=>{
  // const res=await fetch('https://jsonplaceholder.typicode.com/users');
  // return res.json();

  // }

function App() {

const [users,SetUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>SetUsers(data))
  },[])
  // const friendsPromise=friendsFetch();
  

  // const fetchUsersData=fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res=>res.json())
 
  return (
    <>
      
      <h1>React core concept</h1>
      <h2>users:{users.length}</h2>

      {
        users.map(friend=><Friend friend={friend} ></Friend>)
      }
{/* 
      <Suspense fallback={<h2>all my friends...</h2>} >
        <Users friendsPromise={friendsPromise} ></Users>
      </Suspense> */}
        {/* <Suspense fallback={<h3>loading...</h3>} >
             <Users fetchUsersData={fetchUsersData} ></Users>
        </Suspense> */}

     

    </>
  )
}


export default App
