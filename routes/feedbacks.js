const express = require('express')
const router= express.Router()
const Feedback = require('../models/feedback')
const feedback = require('../models/feedback')

//Getting all
// Getting all feedbacks
router.get('/', async (req, res) => {
    try {
        // Optional query filters
        const query = {};
        if (req.query.rating) query.rating = Number(req.query.rating);
        if (req.query.sentiment) query.sentiment = req.query.sentiment;
        if (req.query.keyword) query.keywords = { $in: [req.query.keyword] };

        // Fetch from DB with optional filters and sort by newest first
        const feedbacks = await Feedback.find(query).sort({ timestamp: -1 });

        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//Getting one
router.get('/:id',getFeedback,(req,res)=>{
    res.json(res.feedback)
})
//Creating one
router.post('/',async(req,res)=>{
    const feedback = new Feedback({
        rating: req.body.rating,
        comment: req.body.comment,
        sentiment: req.body.sentiment,   
        keywords: req.body.keywords 
    })
    try{
        const newFeedback = await feedback.save()
        res.status(201).json(newFeedback)
    }   catch(err){
        res.status(400).json({message : err.message})
    }
    
})


//Updating one
router.patch('/:id',getFeedback,async(req,res)=>{
    if(req.body.rating != null){
        res.feedback.rating=req.body.rating
    }
    if(req.body.comment != null){
        res.feedback.comment=req.body.comment
    }
    if (req.body.sentiment != null){
        res.feedback.sentiment = req.body.sentiment;
    }
    if (req.body.keywords != null){
        res.feedback.keywords = req.body.keywords;
    }
    try{
        const updatedFeedback= await res.feedback.save()
        res.json(updatedFeedback)
    }   catch(err){
        res.status(400).json({message: err.message})
    }
})
//Delete one 
router.delete('/:id',getFeedback,async(req,res)=>{
    try{
        await res.feedback.deleteOne()
        res.json({message:'Deleted Feedback'})
         
    }   catch(err){
        res.status(500).json({message:err.message})

    }
    
})

async function getFeedback(req,res,next){
    let feedback
    try{
        feedback= await Feedback.findById(req.params.id)
        if(feedback == null){
            return res.status(404).json({message: 'Cannot find feedback'})
        }

    }   catch(err){
        return res.status(500).json({message: err.message})


    }
    res.feedback=feedback
    next()
}






module.exports=router