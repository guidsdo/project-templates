import { observable } from "mobx";
import { Store } from "../helpers/mobxHelpers";
import { IState } from "./IState";

@Store
export class State implements IState {
    @observable
    counter: number = 0;
}
