import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
.list {
  background-color: #e64944;
  width: 45%;
  text-align: left;
  margin: 4px 0;
  padding-left: 8px;
  cursor: pointer;
}
.list.completed {
  background-color: blue;
  text-decoration: line-through;
}
`

const TodoList = (props) => {
    const {data, toggleCompleted} = props
    return (
        <StyledBox
             onClick={() => toggleCompleted(data.id)}
        > 
      <p className={`list${data.completed ? " completed":""}`}>{data.task}</p>
        </StyledBox>
    )
}

export default TodoList
