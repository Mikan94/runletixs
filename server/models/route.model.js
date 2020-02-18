const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routeSchema = new Schema({
    title: { type: String},
    coords: [{point: Number, latitude: Number, longitude: Number}],
    distance: {type: Number},
    exercise: {type: Number}
}, {
  timestamps: true,
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;