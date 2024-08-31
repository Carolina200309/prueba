'use strict'

function saludar(req,resp){
    resp.status(200).sen({
        message:"Hola mundo"
    });
}

module.exports = {
    saludar
}
