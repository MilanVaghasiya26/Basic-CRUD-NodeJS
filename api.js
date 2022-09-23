var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: false }));
app.use(express.static('public'));

// simple route

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the beginner's task." });
  });
  
require("./routes/basic_route.js")(app);

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

});