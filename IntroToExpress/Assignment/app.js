var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi There, Welcome To My assignment !");
});


app.get("/speak/:name", function(req, res){
    var animal = req.params.name.toLowerCase();
    var sounds = {
        pig :"oink",
        cow :"Moo",
        donkey: "bray",
        cat: "meow",
        dog: "bow bow"
    }
    var sound = sounds[animal];
    //console.log(sound);
    if(typeof sound !== "undefined"){
        res.send("The "+ animal +" says '"+ sound +"'");
    }
    else {
       res.send("Sorry The page not found..........    What are  you doing with your life!!");
    }
});

app.get("/repeat/:word/:times", function(req, res) {
    var isnum = /^\d+$/.test(req.params.times);
    if(isnum){
        var times = Number(req.params.times);
    }
    var result = "";
    //console.log(typeof times);
    if(typeof times === 'number'){
        for(var i = 1; i< times; i++){
            result = result + req.params.word + " ";
        }
        result = result + req.params.word;
        res.send(result);
    }
    else {
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