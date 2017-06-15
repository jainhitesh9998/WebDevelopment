var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}
function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();

		});
	}
}
function setUpSquares(){
	for(var i = 0; i < squares.length; i++){


		//add click listener to square
		squares[i].addEventListener("click", function(){
			//alert("clicked a square");
			//grab color  and compare
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColor(clickedColor);
				messageDisplay.textContent = "Correct";	
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	// change colors of the square
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New colors";
	//default color
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}


// easyBtn.addEventListener("click", function(){
// 	numSquares = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click", function()
// {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
	
// 			squares[i].style.backgroundColor = colors[i];
	
// 			squares[i].style.display = "block";
	
// 	}
// });

resetButton.addEventListener("click", function(){
	//generate all new colors
	reset();
});


function changeColor(color){
	//loop through all the squares
	//change the color to the given color
	for (var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	for (var i = 0;i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//add num random colors to array
	return arr;
}

function randomColor(){
	//pick a "red green blue between 0 -255"
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}