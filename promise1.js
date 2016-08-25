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

const dd = val => new Promise((resolve, reject) => {
  delayedDouble(val, resolve);
});

dd(1).then(logValue)
  .then(() => dd(2)).then(logValue)
  .then(() => dd(3)).then(logValue);
