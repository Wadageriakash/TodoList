
import './App.css';
import Header from './Components/Header';
import {Todos} from "./Components/Todos";
import Footer  from "./Components/Footer";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) =>{
    console.log("I am onDelte of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  }

  const[todos, setTodos] = useState(
[
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job is done1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the market to get this job is done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the market to get this job is done3"
    }
  ]);

  return (
    <>
    <Header title="Todos List" searchBar={true}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
