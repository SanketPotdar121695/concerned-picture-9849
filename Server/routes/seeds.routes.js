const { Router } = require('express');
const { seedsModel } = require('../models/seeds.model');
const cartModel = require('../models/cart.model');

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
// cart
seedsRouter.get("/cart",async(req,res)=>{
    try {
        const seeds = await cartModel.find({})
        res.status(200).send(seeds)   
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})
seedsRouter.post("/cartadd",async(req,res)=>{
    const {image,title,price}=req.body

    try {
        const seeds = await cartModel.create({image,title,price})
        res.status(200).send({msg :"Added to the cart",seeds})   
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})
seedsRouter.delete("/cart/:id",async(req,res)=>{
    const {id}=req.params

    try {
        const seeds = await cartModel.findByIdAndDelete(id)
        res.status(200).send({msg :"Deleted "})   
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

module.exports = {
    seedsRouter
}