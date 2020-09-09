
export const initialState = [
    {
      task: 'Learn Redux',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

export const todoReducer = (state , action) =>{
    switch(action.type) {
        case "ADD_TASK":
            const newTodo = {
                task: action.payload,
                id: new Date(),
                completed:false
            } 
            return [...state, newTodo]
        case "TOGGLE_TASK":
            return state.map((data) =>(
                data.id === action.payload ? {...data, completed: !data.completed } : data 
            ))
        case "CLEAR_TASK":
            return state.filter(item => !item.completed)
        default:
             return state
    }
}