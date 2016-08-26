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

delayedDouble(1, v1 => {
  logValue(v1);
  delayedDouble(2, v2 => {
    logValue(v2);
    delayedDouble(3, v3 => {
      logValue(v3);
    });
  });
});
