import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props, index) {
  return (
    <ul className="ul-item">
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}
