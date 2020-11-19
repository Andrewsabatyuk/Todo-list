import React from "react"
import Todolist from "./Todo/Todolist"
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купити хліб" },
    { id: 2, completed: false, title: "Купити масло" },
    { id: 3, completed: false, title: "Купити молоко" },
    { id: 4, completed: false, title: "Вивчити React" },
    { id: 5, completed: false, title: "get out of this" },
  ])
  


  function toggleTodo(id){
    setTodos(  todos.map( todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))    
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1 className="header-todo">Todo list</h1>

      <Todolist todos={todos}  onToggle={toggleTodo}/>
    </div>
    </Context.Provider>
  );
}

export default App;
