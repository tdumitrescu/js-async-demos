/**
 * Promises: serial
 * Launches each asynchronous action only
 * when the previous action has completed.
 */

'use strict';

const delayedDouble = (val, cb) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => cb(val * 2), delayMS);
};

const logValue = val => console.log(val);

const dd = val => new Promise((resolve, reject) => {
  delayedDouble(val, resolve);
});

dd(1).then(logValue)
  .then(() => dd(2)).then(logValue)
  .then(() => dd(3)).then(logValue)
  .then(() => console.log('done!'));
