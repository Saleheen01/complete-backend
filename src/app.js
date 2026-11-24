//server create
const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());


/* note={title,description} */

/*
    POST /notes => create a new note
    GET /notes => get all notes
    DELETE /notes/:id => delete a note by id
    PATCH /notes/:id => update a note by id

*/
app.post("/notes",async (req,res)=>{
    const data = req.body;/* note={title,description} */
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"note created successfully"
    })
})

app.get("/notes",async (req,res)=>{
    
    
    const notes = await noteModel.find();//array of notes returned from the database
    // const notes =await noteModel.findOne({
    //     title:"test_title"
    // });//array of notes returned from the database

    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    });
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const data = req.body;/* note={title,description} */   
    await noteModel.findOneAndUpdate({_id:id},{description:data.description});

    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app;
