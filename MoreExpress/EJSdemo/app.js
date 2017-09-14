var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
//.ejs is optional now


app.get("/", function(req, res){
    res.render("home")
}); 

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send("you fell in love with : "+ thing);
    //res.render("love.ejs", {thing}); or
    res.render("love", {thingVar: thing});
});
app.get("/posts", function(req, res) {
    var posts = [
        {title: "post1", author: "susie"}, 
        {title: "Jon Snow", author: "GRRM"}, 
        {title: "GOT", author: "ME"}, 
        ];
        res.render("posts.ejs", {posts: posts});
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});