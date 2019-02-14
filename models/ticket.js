let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// skapa ett schema
let ticketSchema = new Schema({
    code: {
        type: String,
        required: [true, 'No code found.']
    },
    name: {
        type: String,
        required: [true, 'There must be a name.']
    },
    price: {
        type: Number,
        required: true
    },
    when: {
        date: { type: String, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true }
    }
});

// Ska en modell baserat på det schemat
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;
