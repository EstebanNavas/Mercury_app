const fs = require('fs');
// const data = []

module.exports = {
    add: (req, res)=>{
        res.render('login.ejs')
    },

    register: (req, res) =>{
        res.render('register.ejs')
    },

    addRegister: (req , res) =>{
        // console.log(req.body);
        const register = {
            email: req.body.email,
            password: req.body.password,
            repytePassword: req.body.repytePassword,
            country: req.body.country,
            lenguage: req.body.language      

        }
        const registerDb = JSON.stringify(register, null, ' ');
        fs.readFile('register.json', 'utf8',(error, data)=>{
            const json = JSON.parse(data)
            const array = []
            array.push(json,register)
            fs.writeFileSync('register.json', JSON.stringify(array, null, ' '));

        })

        res.redirect('/register')
    },

    loader: (req, res) =>{
        res.render('loader.ejs')
    },


}

