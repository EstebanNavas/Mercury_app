const fs = require('fs');


module.exports = {
    add: (req, res)=>{
        res.render('login.ejs')
    },

    register: (req, res) =>{
        res.render('register.ejs')
    },

    addRegister: (req , res) =>{
    
        console.log(req.body);
        const register = {
            email: req.body.email,
            password: req.body.password,
            repytePassword: req.body.repytePassword,
            country: req.body.country,
            lenguage: req.body.lenguage      

        }
        const registerDb = JSON.stringify(register, null, ' ');
        fs.writeFileSync('register.json', registerDb);

        res.send(register)
    },

    loader: (req, res) =>{
        res.render('loader.ejs')
    },


}