// Tickets route for Where its @ app

// models
let Ticket = require('../models/ticket');

// POST 
module.exports.post = async (req, res) => {

    try {
    
        // hantera post
        let ticket = req.body;
        
        // genererar en CODE och sätter in nyckeln code: CODE
        ticket.code = uid(5);

        // Skapar en instants av modellen Ticket
        let resp = await Ticket.create(ticket);
        console.log(resp);

        // Skicka tillbaka svar att allt fick fint + ticket-datan.
        res.status(200).send(resp);

    } catch(err) {
        console.error(err);
        res.status(400).send(err);
    }

};

// GET
module.exports.get = async (req, res) => {

    try {

        let tickets = await Ticket.find({});

        res.status(200).send(tickets);

    } catch(err) {
        res.status(500).send(err);
    }
}

function uid(len){

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = [];

    for(let i=0; i<len; i++){
        let rand = Math.floor(Math.random()*chars.length);
        code.push(chars[rand]);
    }

    return code.join('');

}