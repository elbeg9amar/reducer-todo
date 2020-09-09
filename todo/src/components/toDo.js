import React, { useState, useReducer } from 'react'
import TodoList from './TodoList'

import {todoReducer, initialState} from '../reducer/doReducer'

const ToDo = () => {
   
    const [todo, setTodo] = useState('')
    const [state ,dispatch] =useReducer(todoReducer,initialState)
    

    
    const handleChanges =(e) => {
        setTodo(e.target.value)
    }
    // const handleSubmit = (e) =>{
    //         e.preventDefault();
    //         dispatch({type:"ADD_TASK", payload:todo})
    //        return setTodo('')
    // }
    const toggleCompleted = (id) => {
        dispatch({
            type:"TOGGLE_TASK", payload:id
        })
    }

  
    return (
        <div>
        <form >
            <input 
                type="text"
                name="task"
                placeholder="add tasks"
                value={todo}
                onChange={handleChanges}
            />
            <button onClick={(e) =>{
            e.preventDefault();
            dispatch({type:"ADD_TASK", payload:todo})
           return setTodo('')}}>Add Todo</button>
            <button onClick= {(e) => {
                e.preventDefault()
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