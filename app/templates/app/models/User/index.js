var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = {
  name: String,
  age: Number,
  sex: {type: String, default: '男'},
  hobby: [String]
}

userSchema = new Schema(userSchema, {versionKey: false});

userSchema.statics.retrieve = function(callback){
  this.find()
  .exec(function(error, user){
    if(error) return callback(error);
    callback(null, user);
  });
}

module.exports = userSchema;
