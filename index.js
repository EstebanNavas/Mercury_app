const express = require('express');
const app = express();

const loginRoutes = require('./routes/login');

app.use('/', loginRoutes);

app.use(express.static(__dirname + '/public'));

app.listen('3000', () =>{
    console.log('Sever runnig on port 3000')
});