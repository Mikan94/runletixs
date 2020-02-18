
const router = require('express').Router();
let Workout = require('../models/workout.model');

router.route('/').get((req, res) => {
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newWorkout = new Workout({
      title,
      description
  });

  newWorkout.save()
    .then(() => res.json('Workout added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;