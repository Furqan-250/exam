var mongoose = require('mongoose');
var classesSchema = require('../schemas/classes');

var classesModel = mongoose.model('classes',classesSchema);

module.exports = classesModel;