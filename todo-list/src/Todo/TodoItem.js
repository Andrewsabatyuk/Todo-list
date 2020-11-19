import React, {useContext} from "react";
import propTypes from "prop-types";
import Context from '../context';

function TodoItem({ todo, index, onChange }) {
  // console.log("todo", todo);
  const {removeTodo}= useContext(Context)
  const classes =[];
  if (todo.completed){
    classes.push('done')
  }
  return (
    <li className="style-li">
      <span className={classes.join(' ')}>
        <input type="checkbox" 
        checked ={todo.completed}
        onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="rm" onClick={removeTodo.bind(null,todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number,
  onChange: propTypes.func.isRequired,
};

export default TodoItem;
