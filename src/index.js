import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
/*
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

const partsName = parts.map(value => value.name )
const partsNumber = parts.map(value => value.exercises)
*/
const App = () => {
  const course = {
    name: 'Web languages',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const names = course.parts.map(value => value.name )
  const total = course.parts.map(value => value.exercises )
  return (  
      <div>
    <Header course={course.name} />
    <Content partsname={names} />
    <Total partsnumb={total} />
  </div>)

}

const Header = (props) =>{
  
  return(<div>
  <h1>{props.course}</h1>
  
<p></p>
</div>)
}

const Content = (props) =>{
 
  return(<div>
        <h1>{props.partsname}</h1>
  
</div>)
}

const Total = (props)=>{
 
  return(<div>
    
    {props.partsnumb}
  
</div>)
}

/*const Part1 = (props) =>{
  return(
  <p> {props.part1}   </p>
  )}
const Part2 = (props) =>{
  return(
  <p>{props.part2} &nbsp; : &nbsp;  {props.exercises2}  </p>
)}
const Part3 = (props) =>{
  return(
  <p>{props.part3} &nbsp; : &nbsp;  {props.exercises3}  </p>
)}


const Total = () =>{
 
  let result = ( {exercises1} + {exercises2} + {exercises3})
 return( <div>

   <h1>Resultado: &nbsp; {result}</h1>
 


</div>)
}
*/
root.render(<App />);
