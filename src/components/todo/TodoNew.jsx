const TodoNew = (props) => {
  console.log("check props", props);
  const { addNewTodo } = props;

  // addNewTodo("Eric");
  return (
    <div className="todo-new">
      <input type="text" className="todo-input" placeholder="Nhập thông tin" />
      <button className="todo-btn">Add</button>
    </div>
  );
};

export default TodoNew;
