import { observable } from "mobx";

export class RootStore {
    @observable counter: number = 0;
}
