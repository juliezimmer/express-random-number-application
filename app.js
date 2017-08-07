var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 5000;

var randomNum = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
app.get("/random", function(req,res){
    console.log("random Number");
    randomNum = randomNumber(2,99); // randomNumber = 26;
    var randomNumObject = {
        randomNumber: randomNum
    }
    res.send(randomNumObject);
});

app.listen(port, function(){
    console.log("listenting on port:", port);
});