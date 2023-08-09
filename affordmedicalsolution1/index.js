const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8008;

app.get('/numbers', async(req, res) => {
    const urls = req.query.url;
    if(!urls||!Array.isArray(urls)){
      return res.status(400).json({ error:'Invalid or missing "url" query param'});
    }
    try{
      const requests = urls.map(async (url)=>{
        try{
          const response = await axios.get(url,{timeout:1000});
          if(response.status === 200){
            return response.data.numbers || [];
          }
        }catch(error){
            return [];
        }
      });
      const results = await Promise.all(requests);
      const mgrnum = [].concat(...results);
      const unqintegers = Array.from(new Set(mgrnum)).sort((a,b)=>a-b);
      res.json({numbers: unqintegers});
    }catch(error){
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});