const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('danilovadb', ['cars'])

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    db.cars.find((err, data) => {
        res.render('index', {data : data});
    })
})

app.listen(3000,() =>{
    console.log('Listening on port 3000');
})