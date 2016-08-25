'use strict';

function* evenGenerator(startVal) {
  let cur = startVal;
  while (true) {
    let newCur = yield cur;
    cur = cur + 2;
    if (typeof newCur !== 'undefined') {
      cur = newCur;
    }
  }
}

const evens = evenGenerator(16);

console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next(2).value);
console.log(evens.next().value);
