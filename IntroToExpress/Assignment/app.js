var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi There, Welcome To My assignment !");
});



app.get("/speak/:name", function(req, res){
   if(req.params.name === "pig"){
       res.send("The pig says Oink");
   } else if(req.params.name === "cow"){
       res.send("The cow says 'moo'");
   } else if(req.params.name === "dog"){
       res.send("The dog says Bow Bow");
   } else {
       res.send("Sorry The page not found..........    What are  you doing with your life!!");
   }
});

app.get("*", function(req, res) {
    res.send("Sorry The page not found..........    What are  you doing with your life!!");
})


//to run the application
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Has Started");
});