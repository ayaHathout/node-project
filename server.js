/*
- To use .env:
    import dotenv from 'dotenv';
    dotenv.config();
    mongoose.connect(process.env.mongoConnectionURL);
*/

import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import router from "./routes/subjects.js";

dotenv.config();

// const mongoConnectionURL = 'mongodb://localhost:27017/node_project';
mongoose.connect(process.env.mongoConnectionURL); //==> Instead of: mongoose.connect(mongoConnectionURL);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

// const PORT = 5000;

/*app.get('/', (req, res) =>{
    res.render('departments/all');
})*/

app.use('/subjects', router);

app.listen(process.env.PORT, ()=>{
    console.log(`Started the application on http://localhost: ${process.env.PORT}`);
    //= console.log('Started the application on http://localhost: '+PORT);
});
