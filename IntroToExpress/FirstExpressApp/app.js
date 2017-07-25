var express = require("express");
var app = express();

// "/" Hi
app.get("/", function(req, res){
   res.send("Hi There"); 
});
// "/bye" goodbye
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" meow
app.get("/dog", function(req, res){
    console.log("someone made a request to  /dog")
   res.send("meow"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Has Started");
});