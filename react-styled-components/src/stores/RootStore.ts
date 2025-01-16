import { observable } from "mobx";

export class RootStore {
    @observable accessor counter: number = 0;
}
