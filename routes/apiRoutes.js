const router = require('express').Router(); 
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => { res.json(err); })
});

router.post('/api/workouts', ( {body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => { res.json(dbWorkout) } )
    .catch(err => {res.json(err) } );
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, 
        { $push: { exercises: req.body } }, 
        { new: true, runValidators: true }
    )
    .then(dbWorkout => { res.json(dbWorkout); })
    .catch(err => { res.json(err); });
});




module.exports = router;