import express, { Application } from "express";
import mongoose from "mongoose";
import { postsRouter } from "./routes/posts.router";


const app:Application=express();

// mongodb://localhost:27017/

mongoose.connect("mongodb://localhost:27017/blog")
    .then(()=>{
        console.log("Prisijungėme prie MongoDB");
    })
    .catch((error)=>console.log(error));

    // visai sistemai middleware kuri pasiimsim is express
app.use(express.json());

app.use("/posts", postsRouter);

export {app};