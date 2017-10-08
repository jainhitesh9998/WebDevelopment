var bodyParser =     require("body-parser"),
    mongoose   =     require("mongoose"),
    express    =     require("express"),
    app        =     express();
    
    
mongoose.connect("mongodb://localhost/yelp_camp",{useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
    
//title
//image
//body
//date
    