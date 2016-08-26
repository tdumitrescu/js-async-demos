/**
 * Callbacks: parallel two ways
 * Launches 3 asynchronous actions simultaneously.
 * The first version simply waits for all results
 * and then outputs them simultaneously.
 * The second version outputs as each result comes
 * in.
 */

'use strict';

const delayedDouble = val => new Promise((resolve, reject) => {
  const delayMS = Math.floor(Math.random() * 4000);
  setTimeout(() => resolve(val * 2), delayMS);
});

(async () => {
  // parallel, output all at end
  console.log(await Promise.all([1, 2, 3].map(delayedDouble)));
  console.log('done!');

  // parallel, output as results return
  await Promise.all([1, 2, 3].map(async val => {
    let delay = delayedDouble(val);
    console.log(await delay);
    return delay;
  }));
  console.log('done!');
})();
