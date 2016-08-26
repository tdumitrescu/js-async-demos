'use strict';

let result;
if (process.argv[process.argv.length - 1] === 'immediate') {
  result = 'immediate';
} else {
  result = new Promise(resolve =>
    setTimeout(() => resolve('delayed'), 2000)
  );
}

Promise.resolve(result).then(v => console.log(v));
