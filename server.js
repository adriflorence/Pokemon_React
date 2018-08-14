const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());

app.get('/', function(req, res){
  fetch('http://pokeapi.co/api/v2/pokemon/?limit=150')
  .then(response => response.json())
  .then(response => {
    res.setHeader('Content-Type', 'application/json');
    res.send(response.results); // server -> react send
  });
});

app.get('/pokemon', function(req, res) {
  const url = req.query.url;
  fetch(url).then(response => response.json()).then(response => {
    const info = {
      name: response.name,
      weight: response.weight,
      height: response.height,
      types: response.types,
      images: response.sprites
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(info));
  })
});

app.listen(3001, function(){
  console.log("App running");
});
