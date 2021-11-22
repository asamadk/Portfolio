const express = require('express');
const mongoose = require('mongoose');
const {json, Router} = require('express');

const educationController = require('./Controllers/EducationController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/education", educationController);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
