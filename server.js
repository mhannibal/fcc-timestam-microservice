// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/timestamp/:time?", function (req, res) {
   
  var timestamp = Date.parse(req.params.time);
  var number = parseInt(req.params.time)
  
  if (!req.params.time) {
        var d = new Date();
        res.json({"unix": d.getTime() ,"utc": d.toUTCString()});
  } else if( !isNaN(number)){
    var d = new Date(number);
    res.json({"unix": d.getTime() ,"utc": d.toUTCString()});
  }else{
  if (isNaN(timestamp) == false ) {
    var d = new Date(timestamp);
    res.json({"unix": d.getTime() ,"utc": d.toUTCString()});
  }
  else {
        res.json({error : "Invalid Date" });
   }
  }
  
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});