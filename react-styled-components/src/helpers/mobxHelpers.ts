import { makeObservable } from "mobx";

export interface ClassType<T extends object = any> {
    new (...args: unknown[]): T;
}

export function Store<T extends object>(clazz: ClassType<T>) {
    return new Proxy(clazz, {
        construct(clazz, args) {
            const instance = Reflect.construct(clazz, args);
            makeObservable(instance);
            return instance;
        }
    });
}
