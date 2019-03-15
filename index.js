const express = require('express');

// set up express app

const app = express();

// listerning for request 

app.listen(process.env.port || 400, function(){
    console.log("now listerning for request");

});