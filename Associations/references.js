var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient:true});

//post TITLE, content

var postSchema = new mongoose.Schema({
    title   : String,
    content : String
});

var Post = mongoose.model("Post", postSchema);
//Embed post to user
//user email, name

var userSchema = new mongoose.Schema({
    email: String,
    name : String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

