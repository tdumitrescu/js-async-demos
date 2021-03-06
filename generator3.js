/**
 * Generators: asynchronous usage
 * Each value passed to 'yield' in sequentialDelays()
 * tells run() / randomDelay() the maximum number of MS
 * to wait before continuing on. The result is that
 * the code of sequentialDelays() reads synchronously
 * while it's actually waiting on callback-based
 * asynchronous code.
 */

'use strict';

function* sequentialDelays() {
  console.log(`waited ${yield 200} ms`);
  console.log(`waited ${yield 4000} ms`);
  console.log(`waited ${yield 3000} ms`);
  console.log('done!');
}

const randomDelay = (maxms, cb) => {
  const delayMS = Math.floor(Math.random() * maxms);
  setTimeout(() => cb(delayMS), delayMS);
};

const sd = sequentialDelays();
let nextDelay = sd.next().value;

const run = () => {
  if (nextDelay) {
    randomDelay(nextDelay, val => {
      nextDelay = sd.next(val).value;
      run(nextDelay);
    });
  }
};
run(nextDelay);
