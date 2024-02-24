import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());


mongoose.connect("mongodb+srv://mouneshrebel60:rebelrkm@arkmdairy.suciopu.mongodb.net/?retryWrites=true&w=majority&appName=ArkmDairy", {useNewUrlParser: true, useUnifiedTopology: true } )

.then(() => console.log('Connected Successfully'))

.catch((err) => { console.error(err); });


app.get("/getData",(req,res)=>{
    res.send("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus sit quia laudantium numquam inventore quis autem nesciunt similique? Quisquam consequuntur fugiat, nobis eum nam odit error alias cum iure.");
});

app.listen(3000,() => console.log("app is running"));