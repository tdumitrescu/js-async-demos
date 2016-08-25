'use strict';

function* evenGenerator() {
  let cur = 0;
  while (true) {
    cur = yield cur = cur + 2;
  }
}

const evens = evenGenerator();

console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next().value);
