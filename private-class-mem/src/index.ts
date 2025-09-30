type Callback<T> = () => Promise<T> | T;

export class Fail<T> {
    load: () => Promise<T>;

    constructor(callback: Callback<T>) {
        this.load = () => this.#load(callback);
    }

    async #load(callback: Callback<T>) {
        callback;
    }

    #foo: 123;
}
