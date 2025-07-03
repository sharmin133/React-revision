
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person name='sharmin' tech='javascript'></Person>
       <Person name='shamima' tech='pyhton'></Person>
      <Pet></Pet>
      <Cricket name='tamim' runs='5000' event='stadium'  ></Cricket>
    <Cricket name='musi' runs='4560' event='stadium'  ></Cricket>
    <Cricket name='sakib' runs='4500' event='stadium'  ></Cricket>
    </>
  )
}


function Person(props){
  return(
   <div>
     <h2>i am student {props.name}  </h2>
    <p>she is use {props.tech}</p>
   </div>
  )
}



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
