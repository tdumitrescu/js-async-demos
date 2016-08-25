'use strict';

const immediate = process.argv[process.argv.length - 1] === 'immediate';
const result = immediate ? 'immediate' : new Promise(resolve =>
  setTimeout(() => resolve('delayed'), 2000)
);

Promise.resolve(result).then(v => console.log(v));
