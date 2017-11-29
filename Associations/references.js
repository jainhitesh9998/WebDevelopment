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
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId ,
            ref: "Post"
        }
        ]
});

var User = mongoose.model("User", userSchema);

{
    name: "asfassdfs",
    posts: [
            {title: "asdasdads", content: "asassfksdfsjk"},
            {title: "asdasdads", content: "asassfksdfsjk"},
            {title: "asdasdads", content: "asassfksdfsjk"},
            {title: "asdasdads", content: "asassfksdfsjk"},
            {title: "asdasdads", content: "asassfksdfsjk"}
        ]
};

{
    name: "asfassdfs",
    posts: [
            1312s35d45s4sd5,
            d4as65das6d4542a1,
            askadlsdj6w5asda5
        ]
};

