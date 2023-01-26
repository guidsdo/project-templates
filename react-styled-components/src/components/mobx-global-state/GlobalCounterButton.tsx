import { useContext } from "react";
import { FC } from "react";
import { StateContext } from "../../stores/stateContext";

export const GlobalCounterButton: FC = () => {
    const state = useContext(StateContext);

    return <button onClick={() => state.counter++}>Click me</button>;
};
