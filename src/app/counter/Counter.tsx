"use client";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(44);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div>
            {" "}
            <p>Counter: {count}</p>
            <button className="bg-amber-500" onClick={handleClick}>
                Add 1
            </button>
        </div>
    );
};

export default Counter;
