import React, { useState, useReducer } from 'react'
import TodoList from './TodoList'



const initialData = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  const initialvalue = {
      task:''

  }
  

  

const ToDo = () => {
    const [state, setState] = useState(initialData)
    const [todo, setTodo] = useState(initialvalue)
    const [toggle, setToggle] = useState(false)

    const handleChanges =(e) => {
        const {name,value} = e.target
        setTodo({...todo,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            task: todo.task.trim(),
            id: new Date(),
            completed:false
        }
       
        setState([...state,newTodo])
        
        return setTodo(initialvalue)
        
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
            <button >Add Todo</button>
            <button >Clear Completed</button>
        </form>
       <div>
           <h1>TODO</h1>
           {   
               state.map((data) =>(
                <TodoList data={data} key={data.id}/>
               ))
            }
            
           
       </div>
         
        </div>
    )
   
}

export default ToDo