var bodyParser       =     require("body-parser"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose         =     require("mongoose"),
    express          =     require("express"),
    app              =     express();
    
//App Config
mongoose.connect("mongodb://localhost/restful_blog_app",{useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

    
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

//INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        }else{
            res.render("index", {blogs: blogs});
        }
    })
});

//NEW Route
app.get("/blogs/new",function(req, res) {
   res.render("new"); 
});

//CREATE Route
app.post("/blogs", function(req, res){
   //Create Blog
   //console.log(req.body.blog.body);
   req.body.blog.body = req.sanitize(req.body.blog.body);
   //console.log(req.body.blog.body);
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render("new");
       }else{
           //redirect to the index
           res.redirect("/blogs");
       }
   });
   
});

//show Routes
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("show", {blog: foundBlog});
       }
    });
});

//EDIT Route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("edit", {blog: foundBlog});
       }
    });
   //res.render("edit"); 
});

//update route
app.put("/blogs/:id", function(req, res){
   req.body.blog.body = req.sanitize(req.body.blog.body);
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err){
          res.redirect("/blogs");
      } else{
          res.redirect("/blogs/"+ req.params.id);
      }
   });
});

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    //res.send("Destroy Route");
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            //res.send("notdeleted")
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
   console.log("Server is Up"); 
});
    