const axios = require('axios');
const url = 'http://localhost:8008/numbers';
const urls = [
    'http://20.244.56.144/numbers/odd',
    'http://20.244.56.144/numbers/primes',
    'http://20.244.56.144/numbers/fibo',
];

axios.get(url,{params:{url:urls}})
  .then(response=>{
    console.log(response.data);
  })
  .catch(error=>{
    console.error('Error:', error);
  });