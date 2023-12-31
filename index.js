import { config } from 'dotenv';
const express = require('express');
const app = express();
const port = process.env.PORT;
const helmet = require('helmet');
const cors = require('cors');


// This enables dotenv configulations
config();

// Add your server routes and middleware here
// For example:


app.use(cors());
app.options('*', cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
 app.get('/', (req, res) => {
   res.send('Welcome to the G3clothing!');
 });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

