import { isPromise, wait } from './utils/promise';

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): Promise<T> {
  let p = new Promise<T>((resolve) => {
    let iterator = genFn(); // Get the iterator
    let p = iterator.next();
    let lastVal: any = null;
    function doNext() {
      if (p.done) {
        resolve(lastVal);
        return;
      } else {
        if (isPromise(p.value)) {
          p.value.then((resolved: any) => {
            lastVal = resolved;
            p = iterator.next(resolved);
            doNext();
          });
        } else {
          lastVal = p.value;
          p = iterator.next(p.value);
          doNext();
        }
      }
    }
    doNext();
    // TODO: implement your solution here
  });
  return p;
}

task(function*(){ 
  let x = yield wait(1000);
  console.log('Tick');
  yield wait(1000);
  let y = yield 57;
  console.log('Tick');
  yield wait(1001);
  console.log('Tick');
}).then(function() {
  console.log('boom', arguments);
});