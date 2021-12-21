import React from 'react';

const TodoInput = ({createTodoItem}) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(value === ""){
      return console.log("Please add something to-do")
    }
    createTodoItem(value)
    setValue("")
  }
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Create ToDo"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='input-text'
    />
    <button onClick={handleSubmit}>Add</button>
    </form>
  )
}
export default TodoInput