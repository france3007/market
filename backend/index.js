const express = require('express')
const mongoose = require('mongoose')
const userRoutes =require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)
app.use("/api/products", productRoute);

mongoose.connect('mongodb+srv://mymarket:market000@cluster0.ta2ikpb.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection

db.once('open', ()=>{console.log('Connesso al database')})

app.listen(3000, ()=>{console.log('in ascolto su porta 3000')})