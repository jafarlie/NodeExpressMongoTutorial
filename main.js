const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.json());

const path = require('path');

const signup = require('./Routes/routes.signup.js');

//var mongoDB = 'mongodb://127.0.0.1/my_db';
//mongoose.connect(mongoDB, {useNewUrlParser: true});

// default connection
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//var Schema = mongoose.Schema;

/*
var SomeModelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema); 



/*
const submitBtn = document.getElementById("form_Submit");
submitBtn.addEventListener('click', function(){
    let name = document.getElementById("form_Fname");
    let email = document.getElementById("form_email");
    alert(`${name},${email}`);
});

*/
app.use('/', signup);

app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));