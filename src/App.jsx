import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Học React" },
    // { id: 2, name: "Học Vue" },
    // { id: 3, name: "Học Angular" },
  ]);

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "Hà nội",
    country: "Việt Nam",
  };

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // {key: value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        
        {todoList.length > 0 ?
          <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
        :
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        }


        {/* {todoList.length > 0 &&
          <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
        }
        {todoList.length === 0 &&
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        } */}


      </div>
    </>
  );
};

export default App;
