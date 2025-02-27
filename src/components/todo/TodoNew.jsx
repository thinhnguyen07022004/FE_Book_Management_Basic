import { useState } from "react";

const TodoNew = (props) => {
    // console.log("check props", props);
    const { addNewTodo } = props;

    // useState hook (getter, setter)
    const [valueInput, setValueInput] = useState("");

    // addNewTodo("Eric");
    const handleClick = () => {
        addNewTodo(valueInput);
    };

    const handleOnchange = (event) => {
        setValueInput(event.target.value);
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
            <div>
                Value Input: {valueInput}
            </div>
        </div>
    );
};

export default TodoNew;
