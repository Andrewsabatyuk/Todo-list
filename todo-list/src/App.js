import React from "react";
import Todolist from "./Todo/Todolist";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Купити хліб" },
    { id: 2, completed: false, title: "Купити масло" },
    { id: 3, completed: false, title: "Купити молоко" },
  ];

  return (
    <div className="wrapper">
      <h1 className="header-todo">Todo list</h1>

      <Todolist todos={todos} />
    </div>
  );
}

export default App;
