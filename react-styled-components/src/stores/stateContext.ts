import { createContext } from "react";
import { IState } from "./IState";
import { State } from "./State";

export const StateContext = createContext<IState>(new State());
