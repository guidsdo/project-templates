import { useState } from "react";
import { FC } from "react";

export const LocalCounter: FC = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(c => c + 1);

    return (
        <div>
            <span>Counter: {counter}</span>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
