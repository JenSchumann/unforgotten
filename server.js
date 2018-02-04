//dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

//for testing purposes during set up
//index route
app.get('/', (req, res)=>{
  res.send('iceberg.. straight ahead');
});

// app.get('/lost', (request, response) => {
//     response.send('So many were lost that fateful day that the Titanic went down');
// });





//mongoose connection
mongoose.connect('mongodb://localhost:27017/lost');
mongoose.connection.once('open', function(){
  console.log('Unforgotten connected to mongoose...');
});

//port
app.listen(3000, ()=>{
    console.log("Unforgotten listens for the movement of the ship on the water");
});
