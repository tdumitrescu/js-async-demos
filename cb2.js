'use strict';

const delayedDouble = (val, cb) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => cb(val * 2), delayMS);
};

let totalLogged = 0;

const logValue = val => {
  console.log(val);
  if (++totalLogged === 3) {
    console.log('done!');
  }
};

delayedDouble(1, logValue);
delayedDouble(2, logValue);
delayedDouble(3, logValue);
