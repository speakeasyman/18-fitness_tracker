const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          enum: ['resistance', 'cardio'],
          desription: "Which type of training"
        },
        name: {
          type: String,
          required: true,
          trim: true
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      },
    ],
  },
  {
    toJSON: {
      viruals: true
    }
    });

  const Workout = mongoose.model("Workout", WorkoutSchema);

  module.exports = Workout;
