import React from "react";
import propTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li className="style-li">
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number,
};

export default TodoItem;
