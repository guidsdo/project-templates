import { createContext } from "react";

import { RootStore } from "./RootStore";

export const RootStoreContext = createContext<RootStore>(new RootStore());
