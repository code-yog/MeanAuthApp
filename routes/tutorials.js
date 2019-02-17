const express = require('express');
const router = express.Router();
const config = require('../config/database');


const Tutorial = require('../models/tutorial');

//get all titles
router.get('/titles',(req,res,next)=>{
   Tutorial.getAllTitles((err,tutorials)=>{
       if(err){
         //console.log(err);
            throw err;
       }else {
         //console.log(tutorials);
         //var str = tutorials.toJSON();
         var str = JSON.stringify(tutorials);
           //return res.json({success:true,msg:'Success'});
           return res.json(str);
       }
   })
});

//get title by id
router.post('/id',(req,res,next)=>{
   const id = req.body.id;

   Tutorial.getTutorialById(id,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});

//get title by name
router.post('/title',(req,res,next)=>{
   const name = req.body.name;

   Tutorial.getTutorialByname(name,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});

//get title by name
router.post('/title',(req,res,next)=>{
   const name = req.body.name;

   Tutorial.getTutorialByname(name,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});

//get title by name
router.post('/titlechildren',(req,res,next)=>{
   const name = req.body.name;

   Tutorial.getAllChildrenOfTitle(name,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});

//get title by name
router.post('/topics',(req,res,next)=>{
   const name = req.body.name;

   Tutorial.getAllChildTopicsOfTitle(name,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});

//get title by name
router.post('/subtopics',(req,res,next)=>{
   const name = req.body.name;

   Tutorial.getAllSubTopicsOfTopic(name,(err,tutorials)=>{
       if(err) {
        console.log(err);
           throw err;
        }else {
            res.json(tutorials);
        }
   });
});
//export fuctionality
module.exports = router;
