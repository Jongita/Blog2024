import { error } from "console";
import express, { Application } from "express";
import mongoose from "mongoose";
import { Post } from "../model/post";



const app:Application=express();

// mongodb://localhost:27017/

mongoose.connect("mongodb://localhost:27017/blog")
    .then(()=>{
        console.log("Prisijungėme prie MongoDB");
        const naujasIrasas=new Post({
            title:"Antras įrašas",
            content:"Antro įrašo tekstas"
        });
        console.log(naujasIrasas);
        naujasIrasas.save();

    })
    .catch((error)=>console.log(error));


export {app};