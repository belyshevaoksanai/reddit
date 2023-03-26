function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent>(e: E) => {
        e.preventDefault();
        fn(e);
    }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent>(e: E) => {
        e.stopPropagation();
        fn(e);
    }
}

function preventAll<T extends (e: any) => void>(fn: T) {
    return preventDefault(stopPropagation(fn));
}