var lis = document.querySelectorAll("li");


for(var i = 0; i<lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
	this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
// firstLI.addEventListener("mouseover", function(){
// 	firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function(){
// 	firstLI.style.color = "black";
// });
//Mozilla web event reference count
// var events = document.querySelectorAll('.toggle-container li a code'),
//     eventNames = []
// events.forEach(function(event) {
//   eventNames.push(event.textContent);
// });
// var sortedEventNames = eventNames.slice().sort(),
//     dupes = [];
// for (var i = 0; i < sortedEventNames.length - 1; i++) {
//   if (sortedEventNames[i + 1] == sortedEventNames[i]) {
//     dupes.push(sortedEventNames[i]);
//   }
// }
// sortedEventNames.length - dupes.length;