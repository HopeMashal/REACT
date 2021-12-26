import React, { useState } from "react";

const ToDoList = (props) => {
    const [isCompleted, setIsCompleted] = useState(props.completed);

    const handleClick = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="todo-list">
            {/* <span className={isCompleted && "completed"}><del>{props.text}</del></span>{" "} */}
            <div role={"button"} onClick={handleClick} className="btn">
                {isCompleted ? <span><del>{props.text}</del> <span style={{cursor:'pointer'}}>&#10004;</span></span> : <span>{props.text} <span style={{cursor:'pointer'}}>&#10008;</span></span>}
            </div>
        </div>
    );
};

export default ToDoList;