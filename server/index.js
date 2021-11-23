const express = require('express');
const mongoose = require('mongoose');
const {MONGODB} = require('./config');
const {json, Router} = require('express');

const educationController = require('./Controllers/EducationController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/education", educationController);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

mongoose.connect(MONGODB, {useNewUrlParser : true})
    .then(() => {
        console.log(`MongoDB Connected`)
    })
    .catch(err => {
        console.log(`Error is ${err}`)
    });
