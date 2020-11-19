import React from "react";
import TodoItem from "./TodoItem";
import propTypes from 'prop-types';

function TodoList(props) {
  return (
    <ul className="ul-item">
      {props.todos.map((todo, index) => {
        return (
        <TodoItem todo={todo} 
        key={todo.id} 
        index={index} 
        onChange={props.onToggle} />
        )
      })}
    </ul>
  )
}

TodoList.propTypes ={
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onToggle: propTypes.func.isRequired
}
export default TodoList