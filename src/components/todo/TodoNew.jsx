const TodoNew = (props) => {
  // console.log("check props", props);
  const { addNewTodo } = props;

  // addNewTodo("Eric");
  const handleClick = () => {
    alert("Click me");
  };

  const handleOnchange = (event) => {
    console.log(">> handleChange", event.target.value);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        className="todo-input"
        placeholder="Nhập thông tin"
        onChange={handleOnchange}
      />
      <button className="todo-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
