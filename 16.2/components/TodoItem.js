const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
  return (
    <div className="todo-list">
      <li style={{textDecoration: item.complete ? "line-through gray" : ""}}>
        {item.todo}
      </li>
      <div className="btns">
        <button className="itembtn" onClick={() => completeTodoItem(index)}>Complete</button>
        <button className="itembtn" onClick={() => updateTodoItem(index)}>Edit</button>
        <button className="itembtn" onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  )
};

export default TodoItem;