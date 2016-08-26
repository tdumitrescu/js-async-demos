/**
 * Async functions: waiting on fetch()
 * The fetch() API returns Promises, like:
 * fetch(myURL)
 *   .then(res => res.json())
 *   .then(obj => console.log(obj));
 * Using the await keyword in front of fetch(), the code
 * looks synchronous with no then() callbacks.
 * Any function that uses await must be declared async.
 */

import fetch from 'node-fetch';

async function fetchResults() {
  try {
    const apiResult = await fetch('https://api.mixpanel.com');
    const response = await apiResult.text();
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}

fetchResults();
