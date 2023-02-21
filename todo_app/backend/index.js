
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const todoItems = require("./routers/todoItems");

dotenv.config();


mongoose.connect('mongodb+srv://root:root@cluster0.cfeu4ph.mongodb.net/test',()=>{
    console.log("Connected to mongo")
});



//middleware
app.use(express.json());  
app.use(helmet());
app.use(morgan("common"));


app.use("/api", todoItems );

app.listen(8800,()=>{
    console.log("Backend server is running")
})