var colors =  generateRandom(6);

var score=0;
document.getElementById("score1").innerHTML = score;
var pickedColor = pickColor();
var colorDisplay = document.getElementById("rgbspan");

var messageDisplay=document.querySelector("#message");
var squares=document.querySelectorAll(".box");
var head=document.getElementById("head");
var line=document.getElementById("yo");
colorDisplay.textContent=pickedColor;
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easybutton");
var hard=document.querySelector("#hardbutton");

easy.addEventListener("click", function(){
    colors=generateRandom(3);
    pickedColor=pickColor();
    messageDisplay.textContent=" ";
    head.style.backgroundColor="#141E27";
line.style.backgroundColor="#D29D2B";

    colorDisplay.textContent=pickedColor;
    score=0;
    document.getElementById("score1").innerHTML = score;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            
            squares[i].style.backgroundColor="#D29D2B";
        }
    }
})
hard.addEventListener("click", function(){
    colors=generateRandom(6);
    pickedColor=pickColor();
    messageDisplay.textContent=" ";
    head.style.backgroundColor="#141E27";
line.style.backgroundColor="#D29D2B";

    colorDisplay.textContent=pickedColor;
    score=0;
    document.getElementById("score1").innerHTML = score;
    for(var i=0;i<squares.length;i++){
        
            squares[i].style.backgroundColor=colors[i];
        
       
    }
})
resetButton.addEventListener("click", function(){  
    score=0;
    document.getElementById("score1").innerHTML = score;
  colors=generateRandom(6);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for (var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor=colors[i];
  }
head.style.backgroundColor="#141E27";
line.style.backgroundColor="#D29D2B";
messageDisplay.textContent=" ";
})

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        
       var clickedColor = this.style.backgroundColor;
       if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct";
       
     changecolor(pickedColor);
       }
       else{
           
          this.style.backgroundColor='#D29D2B';
          score++;
          messageDisplay.textContent="Try Again";
        
          document.getElementById("score1").innerHTML = score;
       }
    });

}

function changecolor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;

    }
head.style.backgroundColor=color;
line.style.backgroundColor=color;

}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandom(num){
    var a = []
    for(var i=0; i<num; i++){
        a.push(randomcolor());
    }
    return a;
}
function randomcolor(){
var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}
