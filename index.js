const express = require('express');
const app = express();

const loginRoutes = require('./routes/login');

app.use('/mutantes', loginRoutes);

app.listen('3000', () =>{
    console.log('Sever runnig on port 3000')
});