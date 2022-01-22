const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX' & 'SAN']
    },
    arrival: {
        type: Date
    },
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Amercan', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX' & 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destination: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);