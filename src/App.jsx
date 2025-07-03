
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person name='sharmin' tech='javascript'></Person>
       <Person name='shamima' tech='pyhton'></Person>
      <Pet></Pet>
    
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
export default App
