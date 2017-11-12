var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient:true});

//user email, name

var userSchema = new mongoose.Schema({
    email: String,
    name : String
});

var User = mongoose.model("User", userSchema);

//post TITLE, content

var postSchema = new mongoose.Schema({
    title   : String,
    content : String
});

var Post = mongoose.model("Post", postSchema);



// var newUser = new User({
//     email : "abc@gmail.com",
//     name : "Abc"
// });
// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });


var newPost = new Post({
    title: "Game Of Thrones",
    content: "Game of thrones is the greatest tv series of all times"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else{
        console.log(post);
    }
});