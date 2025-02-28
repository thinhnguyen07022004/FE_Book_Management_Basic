// const TodoData = ({name}) => { //Cách 3
import "./todo.css";
const TodoData = (props) => {
  // props là một biến object {}
  const { name, age, data, todoList, deleteTodo } = props; // Cách 1: Object Destructoring
  // const name = props.name; //Cách 2
  // const age = props.age;
  // const data = props.data;
  // console.log("check props", props);
  const handleOnClick = (id) => {
    deleteTodo(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item" index={item.id}>
            {item.name}
            <button
              onClick={() => handleOnClick(item.id)}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default TodoData;
