const Joke = require("../models/joke.models");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.result(400).json({ message: "Something went wrong", error: err}));
};

module.exports.findOneSingleJoke = (req,res) => {
    Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: " Cant retrieve one joke", error: err}));
};

module.exports.getRandom = (req,res) => {
    Joke.findRandom({},{},{limit:1}, (error,joke) => {
        if(error){
            res.status(400).json({message: "Cant get random", error:err})
        }
        else{
            res.json(joke);
        }
    })
};

module.exports.createNewJoke = (req,res) => {
    console.log(req.body);
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.status(400).json({ message: "Joke cant be created", error: err}));
};

module.exports.updateExistingJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => res.json({ joke: updatedJoke}))
    .catch(err => res.status(400).json({ message: "Cant update Joke", error: err}));
};

module.exports.deleteExistingJoke = (req,res) => {
    Joke.deleteOne({ _id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.status(400).json({ message: "Cant delete Joke", error: err}));
};