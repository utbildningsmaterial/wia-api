
// models
let Ticket = require('../models/ticket');

module.exports.get = async (req, res) => {

    try {
        // verify code
        let resp = await Ticket.find({ code: req.params.code })
        
        if(resp.length == 1){
            // Valid ticket
            res.status(200).send('Ticket is valid.');
            
        } else {
            // NOT valid
            res.status(400).send('Ticket is NOT valid, get a real one. Dude. Common.')
        }


    } catch(err) {
        res.status(500).send(err);
    }

}