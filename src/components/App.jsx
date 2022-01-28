import React, { useState ,useEffect} from "react"
import Header from "./Header";
import Form from "./Form";
import './App.css'
import Todolist from "./Todolist";
function App(){
 //  const initialState=JSON.parse(localStorage.getItem("todos"))||[];
   const [input,setInput]=useState("");
   const [todos,setTodos]=useState([]);
   const [editTodo,setEditTodo]=useState(null)

//    useEffect(()=>{
//        localStorage.setItem("todos",JSON.stringify(todos));
//    },[todos]);

    return (
    <div className="container">
      <div className="app-wrapper">
      <div>
      <Header></Header>
      </div>
       
        <div>
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
        </div>
        <Todolist 
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        />
         </div>
    </div>);
}

export default App;