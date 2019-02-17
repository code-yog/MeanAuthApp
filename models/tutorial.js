const mongoose = require('mongoose');
const config = require('../config/database');


//user schema
const TutorialSchema = mongoose.Schema({
    _id:String ,
    name:String,
    parent:String,
    ancestors:[String],
    order: Number,
    visibility: Boolean,
    place: String,
    header: String,
    type : String,
    description:String,
    author: String,
    tags: [String],
    sections:{header:String,
       text:String,
       texttype:String,
       code:String,
       codetype:String,
       conclusion:String }
     });

const Tutorial = module.exports = mongoose.model('tuts',TutorialSchema);

//Get all titles
module.exports.getAllTitles = function(callback){
    const query = { ancestors: "root" , place: "title"  } ;
    Tutorial.find(query,callback);
}

// get by id
module.exports.getTutorialById = function(id,callback){
    Tutorial.findById(id,callback);
}

//get by name
module.exports.getTutorialByname = function(name,callback){
    const query = {name: name};
    Tutorial.findOne(query,callback);
}

//get all childern of the title
module.exports.getAllChildrenOfTitle= function(name,callback){
    const query = { ancestors: name } ;
    Tutorial.find(query,callback);
}
//get all topics of the title
module.exports.getAllChildTopicsOfTitle = function(name,callback){
    const query = { ancestors: name, place: "topic" } ;
    Tutorial.find(query,callback);
}
//get all subtopics under a topic
module.exports.getAllSubTopicsOfTopic = function(name,callback){
    const query = { ancestors: name , place: "subtopic"  } ;
    Tutorial.find(query,callback);
}
