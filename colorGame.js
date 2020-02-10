var numSqaures=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy")
			{
				numSqaures=3;
			}
			else
			{
				numSqaures=6;
			}
			reset();
			//how many squares to show
			//pick new coclor
			//update page

		});
	}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
	//add initial color
	//add click listner to squares
	squares[i].addEventListener("click",function () {

		var clickedColor=this.style.backgroundColor;
		if(clickedColor === pickedColor){
			// alert("correct!!");
			changeColors(pickedColor);
			h1.style.backgroundColor=pickedColor;
			messageDisplay.textContent="correct";
			resetButton.textContent="Play Again??";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="try again";
		}
	})

	squares[i].style.backgroundColor=colors[i];
}
}

function reset(){
	colors=generateRandomColors(numSqaures);
	// pick a anew random color form array
	pickedColor=pickColor();
	//change color display
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	//change colors of square;
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none"
	}
}
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",function () {
reset();
})

// colorDisplay.textContent=pickedColor;





function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;

	}
}

function pickColor() {
	// body...
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array 
	var arr=[];
	
	for(var i=0;i<num;i++){
	//add num random colors to array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var b=Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var g=Math.floor(Math.random()*256);
	 return "rgb("+r+", "+g+", "+b+")";
}