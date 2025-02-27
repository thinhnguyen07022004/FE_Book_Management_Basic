// const TodoData = ({name}) => { //Cách 3
const TodoData = (props) => {
  // props là một biến object {}
  const { name, age, data, todoList } = props; // Cách 1: Object Destructoring
  // const name = props.name; //Cách 2
  // const age = props.age;
  // const data = props.data;
  // console.log("check props", props);
  return (
    <div className="todo-data">
      <div>My name is {data.address}</div>
      <div>Learning React</div>
      <div>Learning Vue</div>
      <div> 
        {JSON.stringify(todoList)}
      </div>
    </div>
  );
};

export default TodoData;
