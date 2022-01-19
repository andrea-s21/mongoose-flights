const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    let seat = req.body.seat;
    let price = req.body.price;
    let flight = req.params.id;
    let ticket = new Ticket({seat, price, flight});
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flight._id}`)
    })
}

function newTicket(req,res) {
    // Ticket.find({})
    // .sort('flight')
    // .exec(function(err, tickets) {
        res.render('tickets/new', {title: 'Add Ticket'});
    // });
}