const express = require('express');
const { data } = require('./data.json');
const app = express();
const { projects } = data;

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { projects });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project', (req, res) => {
  res.render('project');
});

app.listen('3000', () => {
  console.log('app running on localhost 3000');
});
