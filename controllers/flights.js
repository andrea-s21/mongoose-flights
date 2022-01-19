const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create, 
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {flights});
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {title: 'Flight Detail', flight});
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  req.body.departs = req.body.departs || undefined;
  req.body.flightNo = req.body.flightNo.trim();
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}



