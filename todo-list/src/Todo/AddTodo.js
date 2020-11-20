import React, { useState } from "react";
import propTypes from "prop-types";

function useInputvalue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputvalue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      //    setValue('')
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input className='in-style' {...input.bind} />
      <button type="submit" className='btn'>Add todo</button>
    </form>
  );
}

AddTodo.prototype = {
  onCreate: propTypes.func.isRequired,
};

export default AddTodo;
