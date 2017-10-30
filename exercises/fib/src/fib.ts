
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
    let twoAgo = 1;
    let oneAgo = 0;
    while (oneAgo < 100) {
        let result = twoAgo + oneAgo;
        yield result;
        twoAgo = oneAgo;
        oneAgo = result;
    }
}
