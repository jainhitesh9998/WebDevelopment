var mongoose = require("mongoose");

//connect
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

//adding a new cat to DB
var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("We Saved a cat to DB");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log("Snap!!!");
    }else{
        console.log(cat);
    }
});
//retrive all cats from DB
Cat.find({name: "Mrs. Norris"}, function(err, cats){
   if(err){
       console.log("Oh No error");
       console.log(err);
   } else{
       console.log("All The cats");
       console.log(cats);
   }
});



