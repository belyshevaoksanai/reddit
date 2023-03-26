export function merge<O extends object>(obj: O) {
    return <E extends object>(obj2: E) => ({
        ...obj,
        ...obj2,
    })
}