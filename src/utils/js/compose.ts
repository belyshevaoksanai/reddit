function compose<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduceRight((prevValue, fn) => fn(prevValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduce((prevValue, fn) => fn(prevValue), initialValue);
}

function pick<K extends string>(props: K) {
    return <O extends Record<K, any>>(obj: O) => obj[props];
}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: number) {
    return !b;
}

const createFilterBy = (key: string) => (value: any) => pipe(pick(key), isEqual(value), cond)