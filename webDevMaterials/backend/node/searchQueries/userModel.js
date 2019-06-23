var mongoose = require('mongoose'),
    validator = require('validator');


var userSchema = new mongoose.Schema({

    email: {
        type: String, unique: true, required: true, lowercase: true,
        validate: (anEmail) => {
            return validator.isEmail(anEmail);
        }
    },
    skills: [{type: String}]

});

//export as a model so we dont have to include it via mongoose.model('User');
module.exports = mongoose.model("User", userSchema);