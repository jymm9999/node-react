const express = require('express');
const path = require('path');
const React = require('react');
const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Express listening on port', 3000);
});