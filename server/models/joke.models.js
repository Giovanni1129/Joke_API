const Mongoose = require('mongoose'),
    random = require('mongoose-simple-random');

const JokeSchema = new Mongoose.Schema({
    setup:{
        type: String,
        required:[true, "Setup is required"],
        minlength:[10, " Setup must be at least 10 characters"]
    },
    punchline:{
        type: String,
        required:[true, "punchline is required"],
        minlength:[3, "must be at least 3 characters long"]
    }
},{timestamps:true})

JokeSchema.plugin(random);


const Joke = Mongoose.model("joke", JokeSchema);
module.exports = Joke;