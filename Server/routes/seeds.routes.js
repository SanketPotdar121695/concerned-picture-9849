const { Router } = require('express');
const { seedsModel } = require('../models/seeds.model');

const seedsRouter = Router();

// add a seeds
seedsRouter.post("/add",async(req,res)=>{
    const {image,title,price}=req.body

    try {
        const seeds = await seedsModel.create({image,title,price})
        res.status(200).send({msg :"seed added",seeds})   
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})
// get seeds
seedsRouter.get("/",async(req,res)=>{
    try {
        const seeds = await seedsModel.find({})
        res.status(200).send(seeds)   
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

module.exports = {
    seedsRouter
}