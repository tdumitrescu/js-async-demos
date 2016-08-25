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
