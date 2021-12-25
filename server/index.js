const express = require('express');
const mongoose = require('mongoose');
const {MONGODB} = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');

const educationController = require('./Controllers/EducationController');
const userController = require('./Controllers/UserController');
const experienceController = require('./Controllers/ExperienceController');
const messageController = require('./Controllers/MessageController');
const projectController = require('./Controllers/ProjectController');
const skillController = require('./Controllers/SkillsController');

// const { urlencoded } = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/education",educationController);
app.use("/user",userController);
app.use("/experience",experienceController);
app.use("/message",messageController);
app.use("/project",projectController);
app.use("/skills",skillController);

app.use("/uploads",express.static("uploads"));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

mongoose.connect(MONGODB)
    .then(() => {
        console.log(`MongoDB Connected`)
    })
    .catch(err => {
        console.log(`Error is ${err}`)
    });
