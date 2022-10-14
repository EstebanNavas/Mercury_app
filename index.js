const express = require('express');
const methodOverride = require('method-override');

const app = express();

const loginRoutes = require('./routes/login');
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', loginRoutes);

app.use(express.static(__dirname + '/public'));

app.listen('3000', () =>{
    console.log('Sever runnig on port 3000')
});