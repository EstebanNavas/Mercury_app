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
            json.push(register)
            const newJson = JSON.stringify(json, null, 2)
            fs.writeFileSync('register.json', newJson, (error)=>{
                if(error ){
                    console.log('Ah ocurrido un error');
                    return
                }

            });

        })

        res.redirect('/register')
    },

    loader: (req, res) =>{
        res.render('loader.ejs')
    },


}

