import React, { useState, useReducer } from 'react'
import TodoList from './TodoList'

import {todoReducer, initialState} from '../reducer/doReducer'




  
  

  

const ToDo = () => {
   
    const [todo, setTodo] = useState('')
    const [state ,dispatch] =useReducer(todoReducer,initialState)
    

  const toggleCompleted = (id) => {
    dispatch({
        type:"TOGGLE_TASK", payload:id
    })
  }

    const handleChanges =(e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) =>{
       
            e.preventDefault();
            dispatch({type:"ADD_TASK", payload:todo})
           return setTodo('')
        
    }
  

    
  
    
   
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="task"
                placeholder="add tasks"
                value={todo.task}
                onChange={handleChanges}
            />
            <button>Add Todo</button>
            <button onClick= {(e) => {
             
                dispatch({
                    type:"CLEAR_TASK",
                })
            }}>Clear Completed</button>
            
        </form>
       <div>
           <h1>TODO</h1>
           {   
               state.map((data) =>(
                <TodoList data={data} key={data.id} 
                toggleCompleted={toggleCompleted}/>
               ))
            }
            
           
       </div>
         
        </div>
    )
   
}

export default ToDo