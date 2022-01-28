import React,{useEffect} from 'react';
import {v4 as uuidV4} from "uuid"
function Form({input,setInput,todos,setTodos,editTodo,setEditTodo}) {


function updateTodo(title,id,completed){
    const newTodo=todos.map((todo)=>
        todo.id===id ? {title,id,completed}:todo
    );
    setTodos(newTodo);
    setEditTodo("");
}

useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title);
    }
    else{
        setInput("");
    }
},[setInput,editTodo]);

function onInputChange(event){
    setInput(event.target.value);
}

function onFormSubmit(event){
    event.preventDefault();
    if(!editTodo){
    setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
    setInput("");
    }else{
        updateTodo(input,editTodo.id,editTodo.completed)
    }
}

    return (
 <form onSubmit={onFormSubmit}>
     <input 
     className='task-input'
     type="text" 
     placeholder="Enter here"
     value={input} required

     onChange={onInputChange}
     />
     <button type="submit" className='button-add'>
     {editTodo ? "OK" : "Add"}
     </button>
 </form>

  );
};

export default Form;
