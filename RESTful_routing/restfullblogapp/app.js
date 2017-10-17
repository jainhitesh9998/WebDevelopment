var bodyParser =     require("body-parser"),
    mongoose   =     require("mongoose"),
    express    =     require("express"),
    app        =     express();
    
//App Config
mongoose.connect("mongodb://localhost/restful_blog_app",{useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
    
//Mongoose  Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date, 
        default: Date.now
    }
});



var Blog = mongoose.model("Blog", blogSchema);


//Routes
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        }else{
            res.render("index", {blogs: blogs});
        }
    })
});



app.listen(process.env.PORT, process.env.IP, function(req, res){
   console.log("Server is Up"); 
});
    