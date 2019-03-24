var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
});

UserModelSchema.virtual('name').get(function(){
    return this.userName;
});

UserModelSchema.virtual('email').get(function(){
    return this.userEmail;
});

module.exports = mongoose.model("UserModel", UserModelSchema);