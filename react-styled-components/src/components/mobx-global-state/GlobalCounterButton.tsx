import { useContext, FC } from "react";

import { RootStoreContext } from "../../stores/stateContext";

export const GlobalCounterButton: FC = () => {
    const state = useContext(RootStoreContext);

    return <button onClick={() => state.counter++}>Click me</button>;
};
