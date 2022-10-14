// const { application } = require("express")

function api (){
    const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'

        }

    }
    return fetch(URL, options)
}


async function verApi (){
    const response = await api()
    const data = await response.json()
    console.log(response);
    console.log(data);
    console.log('prueba');
}

verApi();