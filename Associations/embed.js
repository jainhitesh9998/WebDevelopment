var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient:true});

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

// var newUser = new User({
//   email: "random@random.com",
//   name:"random",
// });

// newUser.posts.push({
//     title:"How to train a dragon",
//     content: "see the movie"
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Game Of Thrones",
//     content: "Game of thrones is the greatest tv series of all times"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

User.findOne({name: "random"},function(err, user){
    if(err){
        console.log(err);
    } else{
        //console.log(user);
        user.posts.push({
            title: "Despicable Me 2",
            content: "Best Movie??? better movie are there"
        });
        user.save(function(err, user){
           if(err){
        console.log(err);
        } else{
        console.log(user);
        
        } 
        });
    }
})