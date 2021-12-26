import React, { useState } from "react";

const Checkbox=()=>{
  const arr = ["one", "two", "three", "four", "five"];

    const [isChecked, setIsChecked] = useState(() => {
        const newChecked = {};
        for (let i of arr) {
            newChecked[i] = false;
        }
        return newChecked;
    });
    const [CheckedItem, setCheckedItem] = useState([...arr]);

    const displayItems = () => {
        return CheckedItem.map((item, i) => {
            return (
                <li key={i} className="item">
                    <input
                        type={"checkbox"}
                        onClick={() => {
                            handleCheckChange(item);
                        }}
                        checked={isChecked[item]}
                        onChange={() => {
                            handleCheckChange(item);
                        }}
                    ></input>
                    {item}
                </li>
            );
        });
    };

    const handleCheckChange = (item) => {
        const newChecked = { ...isChecked };
        if (isChecked[item] === true) {
            newChecked[item] = false;
        } else {
            newChecked[item] = true;
        }
        setIsChecked(newChecked);
    };

    const handleDelete = () => {
        let newArr = [...CheckedItem];
        newArr = newArr.filter((item) => isChecked[item] === false);
        setCheckedItem(newArr);
        resetChecks();
    };

    const handleReset = () => {
        setCheckedItem([...arr]);
        resetChecks();
    };

    const resetChecks = () => {
        const newChecked = {};
        for (let i of arr) {
            newChecked[i] = false;
        }
        setIsChecked(newChecked);
    };

    return (
        <div className="item">
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <ul className="item-list">{displayItems()}</ul>
        </div>
    );
}

export default Checkbox;