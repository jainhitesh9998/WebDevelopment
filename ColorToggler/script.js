var button = document.querySelector("button")
var isPink = false;
// button.addEventListener("click", function(){
// 	if(!isPink){
// 		document.body.style.background = "pink";
// 	}
// 	else{
// 		document.body.style.background = "white";
// 	}
// 	isPink = !isPink;
// });
button.addEventListener("click", function(){
		document.body.classList.toggle("pink");
});