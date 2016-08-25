'use strict';

const delayedDouble = (val, cb) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => cb(val * 2), delayMS);
};

const dd = val => new Promise(resolve => delayedDouble(val, resolve));

const ddPromises = [1, 2, 3].map(val =>
  dd(val).then(result => console.log(result))
);
Promise.all(ddPromises).then(() => console.log('done!'));
