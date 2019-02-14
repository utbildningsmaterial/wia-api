// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// connect to our db 
// !!! START PROCESS WITH USER=username PASSWORD=password !!!
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@johanscluster-bixv4.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(() => {
    console.info('Connected.')
})
.catch(err => {
    console.error(err.stack);
});

// routes
let tickets = require('./routes/tickets');
let verify = require('./routes/verify');

let app = express();

app.use(express.json());
app.use(cors()); // dev

app.route('/tickets')
.post(tickets.post)
.get(tickets.get)

app.route('/verify/:code')
.get(verify.get)


app.listen(3000, () => {
    console.info('Servern körs på port: 3000.');
})