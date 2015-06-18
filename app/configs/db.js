/**
 *TODO  需要持续完善
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_mongo');

exports.mongoose = mongoose;