const express = require('express');
const mongoose = require('mongoose');
const {MONGODB} = require('./config');
const {json, Router} = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const educationController = require('./Controllers/EducationController');
const userController = require('./Controllers/UserController');
const { urlencoded } = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
    extended : false
})

app.use("/education", educationController);
app.use("/user",jsonParser,userController);

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
