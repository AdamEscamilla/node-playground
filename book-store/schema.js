//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
    ObjectId = Schema.ObjectId;

var mySchema = new Schema({
    name      : String,
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

// Compile model from schema
var MyModel = mongoose.model('Book', mySchema );

module.exports = MyModel;
