var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp",{useMongoClient: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


//Schema Setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg",
//         description: "This is a huge granite hil, No Bathrooms, No Water, Beautiful Granite!"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly Created Campground");
//             console.log(campground);
//         }
//     }
// );


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //Get All Campgrounds
    Campground.find({}, function(err, allCampgrounds){
       if(err){
            console.log(err);
       }else{
           res.render("index", {campgrounds: allCampgrounds});
       } 
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds",function(req, res){
    //get data from form and add to the array
    //redirect to the campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampgrounds = {name: name, image: image, description: desc};
    //create a new campground and save to the DB
    Campground.create(newCampgrounds, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            //Redirect to campground page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});

//Show us more Info  about the campgrounds
app.get("/campgrounds/:id", function(req, res){
    //fing the campground woth the provided id 
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
           res.render("show", {campground: foundCampground});
       }
    });
    //render show template with that campground
});


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("The YelpCamp server started");
});