import { observer } from "mobx-react";
import { useContext } from "react";
import { FC } from "react";
import { StateContext } from "../../stores/stateContext";
import { GlobalCounterButton } from "./GlobalCounterButton";

export const GlobalCounter: FC = observer(() => {
    const state = useContext(StateContext);

    return (
        <div>
            <span>Counter: {state.counter}</span>
            <GlobalCounterButton />
        </div>
    );
});
