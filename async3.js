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
  await Promise.all([1, 2, 3].map(v => delayedDouble(v).then(dv => console.log(dv))));
  console.log('done!');
})();
