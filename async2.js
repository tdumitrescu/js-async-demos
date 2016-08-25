'use strict';

const delayedDouble = val => new Promise((resolve, reject) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => resolve(val * 2), delayMS);
});

(async () => {
  console.log(await delayedDouble(1));
  console.log(await delayedDouble(2));
  console.log(await delayedDouble(3));
  console.log('done!');
})();
