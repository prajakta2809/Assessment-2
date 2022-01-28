import React from 'react';

function Todolist({todos,setTodos,setEditTodo}) {

function handleComplete(todo){
  setTodos(
    todos.map((item)=>{
      if(item.id ===todo.id){
        return {...item,completed: !item.completed};
      }
      return item;
    })
  )
}


function handleEdit({id}){
  const findTodo =todos.find((todo)=> todo.id ===id);
  setEditTodo(findTodo);
}


function handleDelete({id},event){
    
    setTodos(todos.filter((todo) => todo.id !== id));
    //event.target.classList.toggle("crossed-line")
  }

  return (<div>
     
      {todos.map((todo)=>
      <li 
      className='list-item'
      key={todo.id}>
     <input 
     className="list"
     type="text" 
     value={todo.title} 
     className={`list ${todo.completed ? "complete": ""}`}
     onChange={(event)=>event.preventDefault()}     
     />
     <button className='button-complete ' onClick={()=> handleComplete(todo)}>Done</button>
      <button className='button-edit' onClick={()=>handleEdit(todo)}>Edit</button>
      <button className="button-delete" onClick={()=>handleDelete(todo)}>Delete</button>
      </li>
      )}
  </div>);
};

export default Todolist;
