const express = require('express');
const { data } = require('./data.json');
const app = express();
const { projects } = data;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen('3000', () => {
  console.log('app running on localhost 3000');
});
