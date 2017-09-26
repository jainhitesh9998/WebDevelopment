var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
          {name: "salmon creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}, 
          {name: "Granite Hill", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}, 
          {name: "Old Trafford", image: "https://farm5.staticflickr.com/4007/4489630578_73c0948a76.jpg"}, 
          {name: "Allianz Arena", image: "https://farm4.staticflickr.com/3241/2925011226_c150c7e78b.jpg"},
          {name: "salmon creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}, 
          {name: "Granite Hill", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}, 
          {name: "Old Trafford", image: "https://farm5.staticflickr.com/4007/4489630578_73c0948a76.jpg"}, 
          {name: "Allianz Arena", image: "https://farm4.staticflickr.com/3241/2925011226_c150c7e78b.jpg"},
          {name: "salmon creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}, 
          {name: "Granite Hill", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}, 
          {name: "Old Trafford", image: "https://farm5.staticflickr.com/4007/4489630578_73c0948a76.jpg"}, 
          {name: "Allianz Arena", image: "https://farm4.staticflickr.com/3241/2925011226_c150c7e78b.jpg"},
          {name: "salmon creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}, 
          {name: "Granite Hill", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}, 
          {name: "Old Trafford", image: "https://farm5.staticflickr.com/4007/4489630578_73c0948a76.jpg"}, 
          {name: "Allianz Arena", image: "https://farm4.staticflickr.com/3241/2925011226_c150c7e78b.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds",function(req, res){
    //get data from form and add to the array
    //redirect to the campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image};
    campgrounds.push(newCampgrounds);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("The YelpCamp server started");
});