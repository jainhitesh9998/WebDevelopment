var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs")
}); 

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send("you fell in love with : "+ thing);
    //res.render("love.ejs", {thing}); or
    res.render("love.ejs", {thingVar: thing});
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});