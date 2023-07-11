const express = require("express");

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//to GET all workouts
router.get("/", getWorkouts);

//to GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);


module.exports = router;