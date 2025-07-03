
import './App.css'
import ToDo from './ToDo'
import Person from './Person'
import Singer from './Singer';
import Counter from './Counter';
import Batsman from './Batsman';

function App() {

  // const handleClick=()=>{
  //   alert('successfully clicked')
  // }

  // const handleClick2=(num)=>{
  //   const newNum=num+10;
  //   alert(newNum);
  // }
// const persons=['halim','miti','nisi','kabir'];
// const singers=[
//   {name:'sharmin', age:24, subject:'science'}
// ]
  return (
    <>
      
      <h1>React core concept</h1>
      <Batsman></Batsman>
      {/* <Counter></Counter> */}
{/* 
      <button onClick={handleClick} >Click me</button>

      <button onClick={()=> handleClick2(2)} >Click me 2</button> */}

      {/* {
        persons.map(person=><Person person={person} ></Person>)
      } */}
      {/* {
        singers.map(singer =><Singer key={singer.id} singer={singer}></Singer>)
      } */}


      {/* <ToDo task='learn react' isDone={true}  ></ToDo>
         <ToDo task='learn javascript' isDone={false}  ></ToDo>
            <ToDo task='learn python' isDone={true}  ></ToDo> */}
      {/* <Person name='sharmin' tech='javascript'></Person>
       <Person name='shamima' tech='pyhton'></Person>
      <Pet></Pet>
      <Cricket name='tamim' runs='5000' event='stadium'  ></Cricket>
    <Cricket name='musi' runs='4560' event='stadium'  ></Cricket>
    <Cricket name='sakib' runs='4500' event='stadium'  ></Cricket> */}


    </>
  )
}


// function Person(props){
//   return(
//    <div>
//      <h2>i am student {props.name}  </h2>
//     <p>she is use {props.tech}</p>
//    </div>
//   )
// }



function Pet(){
  return(
    <div>
      <h2>Favorite</h2>
    <ul>
      <li>dog</li>
    <li>cat</li>
    </ul>
    </div>
  )
}


function Cricket ({name,runs,event}){
  return(
    <div>
      <h2>player name is {name} </h2>
      <p>total run {runs} </p>
      <p>event is  {event}</p>
    </div>
  )
}
export default App
