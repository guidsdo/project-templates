import { observer } from "mobx-react";
import { useContext, FC } from "react";

import { RootStoreContext } from "../../stores/stateContext";

import { GlobalCounterButton } from "./GlobalCounterButton";

export const GlobalCounter: FC = observer(() => {
    const state = useContext(RootStoreContext);

    return (
        <div>
            <span>Counter: {state.counter}</span>
            <GlobalCounterButton />
        </div>
    );
});
