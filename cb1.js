/**
 * Callbacks: parallel
 * Launches 3 asynchronous actions simultaneously
 * and outputs as each finishes.
 */

'use strict';

const delayedDouble = (val, cb) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => cb(val * 2), delayMS);
};

delayedDouble(1, val => console.log(val));
delayedDouble(2, val => console.log(val));
delayedDouble(3, val => console.log(val));
