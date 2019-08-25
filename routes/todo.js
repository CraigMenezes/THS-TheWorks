var express = require('express');
var router = express.Router();
var db=require('../models')

//view all files
//path= /
router.get('/',(req,res)=>{
    db.Todo.find({})
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
})

//create a file
router.post('/',(req,res)=>{
    db.Todo.create(req.body)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
})

//view a single file
//path= 
router.get('/:id',(req,res)=>{
    db.Todo.findOne({_id: req.params.id})
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
})

//update a file
router.put('/:id',(req,res)=>{
    db.Todo.findOneAndUpdate({_id:req.params.id},req.body)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
})

//delete a file
router.delete('/:id',(req,res)=>{
    db.Todo.findOneAndDelete({_id:req.params.id})
    .then(()=>res.send('file deleted'))
    .catch((err)=>res.send(err))
})

module.exports = router;