// import express from 'express'
const express = require("express");
// import path from'path'
const path = require("path");
const app = express();
// import assetsRouter from './server/assets-router';

// const assetsRouter = require("./server/assets-router");



// app.use("/src", assetsRouter);
// app.use("/", express.static(path.join(__dirname, "public")));
// app.get("/api/v1", (req, res) => {
// res.json({
//  project: "React and Express Boilerplate",
//  from: "Vanaldito",
// });
// });
// app.get("/*", (_req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
// })
const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
 console.log();
 console.log(`  App running in port ${PORT}`);
 console.log();
 console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});


const config = require('./config/config.js');
// const app =require('./server/express.js');
const mongoose=require('mongoose');
// import config from './config/config.js' 
// import app from './server/express.js'
// import mongoose from 'mongoose' 
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
//useCreateIndex: true, 
useUnifiedTopology: true } )

.then(() => {
console.log("Connected to the database!");
})

mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database:${config.mongoUri}`) 
})

app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})