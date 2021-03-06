var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var friends = ["Jon", "Dany", "Sansa", "Cersei", "Jamie"];
 
app.get("/", function(req, res){
    res.render("home");
});

app.post("/addFriend", function(req, res){
   var newFriend = req.body.newFriend;
   friends.push(newFriend);
   res.redirect("/friends"); 
});

app.get("/friends",function(req, res){
   
   res.render("friends", {friends: friends}); 
});
//friends list
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});