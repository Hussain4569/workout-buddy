require("dotenv").config();

const express = require("express"); 
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/User")
const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//************ ROUTES ************ 

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
    

const port = process.env.PORT || 4000;
//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to port
        app.listen(port, () => {
            console.log("connected to DB and listening on port " + port);
        });
    })
    .catch((err) => {
        console.log(err);
    });

