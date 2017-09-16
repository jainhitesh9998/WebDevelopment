var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res) {
   res.render("search");
   
});
app.get("/results", function(req, res){
    var place = req.query.search;
    var call = "http://www.omdbapi.com/?apikey=thewdb&s="+place;
    //console.log(call);
    request(call, function(error, response, body){
        if(!error && response.statusCode == 200){
            var movie = JSON.parse(body)["Search"];
            res.render("results", {movie: movie});
        }else{
            res.send("error in query");
        }
    }); 
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie Application Has Started");
});