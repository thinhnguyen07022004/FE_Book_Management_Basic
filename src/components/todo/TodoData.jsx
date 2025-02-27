// const TodoData = ({name}) => { //Cách 3
import "./todo.css";
const TodoData = (props) => {
  // props là một biến object {}
  const { name, age, data, todoList } = props; // Cách 1: Object Destructoring
  // const name = props.name; //Cách 2
  // const age = props.age;
  // const data = props.data;
  // console.log("check props", props);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>>>Check map:", item, index);
        return (
          <div className="todo-item" index={item.id}>
              {item.name}
              <button>
                Delete
              </button>
          </div>
        )
      })}
    </div>
  );
};

export default TodoData;
