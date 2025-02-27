import { useState } from "react";
import "./todo.css";

const TodoNew = (props) => {
    // console.log("check props", props);
    const { addNewTodo } = props;

    // useState hook (getter, setter)
    const [valueInput, setValueInput] = useState("");

    // addNewTodo("Eric");
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    };

    const handleOnchange = (event) => {
        setValueInput(event.target.value);
    };

    return (
        <div className="todo-new">
            <input
                type="text"
                value={valueInput}
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
