
const router = require('express').Router();
let Route = require('../models/route.model');

router.route('/').get((req, res) => {
  Route.find()
    .then(route => res.json(route))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const coords = req.body.coords;
  const distance = req.body.distance;
  const exercise = req.body.exercise;

  const newRoute = new Route({
      title,
      coords,
      distance,
      exercise
  });

  newRoute.save()
    .then(() => res.json('Route added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;