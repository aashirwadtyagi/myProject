//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is runnign at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo db connection failed", err) 
})

























/*
// using first approach using async await 
import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants';

const app = express()

( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        app.on("error", ()=>{
            console.log("ERR", error);
            throw error;
        })
        app.listem(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}.`))
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
})()
*/