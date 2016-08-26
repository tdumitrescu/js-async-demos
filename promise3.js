/**
 * Promises: mixing synchronous and asynchronous
 * Passing the command line argument 'immediate'
 * causes the program to output 'immediate' right
 * away. Otherwise the program outputs 'delayed'
 * after 2s. Demonstrates returning normal values
 * or Promises in a single Promise chain.
 */

'use strict';

let result;
if (process.argv[process.argv.length - 1] === 'immediate') {
  result = 'immediate';
} else {
  result = new Promise(resolve =>
    setTimeout(() => resolve('delayed'), 2000)
  );
}

Promise.resolve(result).then(v => console.log(v));
