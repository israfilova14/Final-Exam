const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const {Schema} = mongoose
const foodSchema = new Schema ({
    imgSrc : {
        type: String,
        require: true,
    },
    title : {
        type: String,
         require: true
    },
    description: {
        type: String,
        require: true
    }
})
const Food = mongoose.model("Food", foodSchema)

app.post("/foods" , async(req, res) => {
    try{
        const {imgSrc, title, description} = req.body
        const food = new Food ({
            imgSrc,
            title,
            description
        })
        await food.save()
        res.status(200).send(food)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/foods" , async(req, res) => {
    try{
        const foods = await Food.find({})
        res.status(200).send(foods)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.delete("/foods/:id", async(req, res) =>{
    try{
        const {id} = req.params
        const food  = await Food.findByIdAndDelete(id)
        res.status(200).send(food)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/foods/:id", async(req, res) => {
    try{
        const {id} = req.params
        const food = await Food.findById(id)
        res.status(200).send(food)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.put("/foods/:id", async(req, res) =>{
    try{
        const {id} = req.params
        const {imgSrc, title, description} = req.body
        const food = await Food.findByIdAndUpdate(
            id,
            {
                imgSrc,
                title,
                description
            },
            {new: true}

        )
        res.status(200).send(food)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})
const PORT = process.env.PORT
const DB = process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));
app.listen(PORT, console.log("Port is up and running on the port", PORT))