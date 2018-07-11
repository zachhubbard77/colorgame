
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// Easy and Hard modes below. Need to work out easy bug. 
easyBtn.addEventListener('click', function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
    
});

hardBtn.addEventListener('click', function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected"); 
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});



resetButton.addEventListener('click', function(){
    // generate all new colors
    
    
    //NEED TO UPDATE BELOW IF THE EASY SECTION IS HIGHLIGHTED - RIGHT NOW IT'S A BUG
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //generate colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //Add initial colors to squares 
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square and compare color to picked color
        var clickedColor = this.style.backgroundColor;
        
        
        console.log(clickedColor, pickedColor);
        
        
        if(clickedColor !== pickedColor){
            this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try again!"
            
        } else {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            header.style.backgroundColor = pickedColor;
            
        }
    });
    
}


//Function for changing all the colors to right color at once.

function changeColors(color){
    // loop through all squares. change each color to match given color
    for(var i = 0; i < squares.length; i++){
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
    //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        //get random color
        
        //push into array
    }
    //return that array
    return arr;
    
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



