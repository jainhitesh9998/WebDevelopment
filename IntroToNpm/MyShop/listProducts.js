var fake  = require("faker");
console.log("Welcome to My Shop");
console.log("product \t price");
for (var i = 0; i<10; i++){
    console.log(fake.fake("{{commerce.productName}} -  Rs.{{commerce.price}}"));
}