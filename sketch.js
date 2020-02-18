/*
	Glitch Image Arrays
	by: Alvin Tran

	Use images and other shape-drawing techniques with timers using millis() to create erratic behavior.

*/

var img; // Declare variable 'img'.
var imageList=[];
var stringList;

var bRegular=true;

var posX;
var posY;

//State machines that determines emotions
var state; //will change
var stateList;

// preload() will execture before setup()
function preload(){
  imageList[0]=loadImage('image1.jpg'); 			
  imageList[1]=loadImage('image2.jpg');
  imageList[2]=loadImage('image3.jpg');
  imageList[3]=loadImage('image4.jpg');
  imageList[4]=loadImage('image5.jpg');
  stringList=["Hi there!"];
}

function setup(){
	print("Glitch Image Array");

	imageMode(CENTER);

	chooseNewImage();
  
	createCanvas(1024, 800);

	startMillis=millis();
}

function draw(){
	if(state=="Ellipse")
		drawOne();
	else if(state=="mouseFollow")
		drawTwo();
	else if(state=="displayText")
		drawThree();
	else if(state=="shrinkPic")
		drawFour();
	else if(state=="Triangle")
		drawFive();
	else if(state="normalPic")
		drawZero();
}

function drawZero(){//Normal display
	background(0);//Black
    image(img, width/2, height/2);
}

function drawOne(){//Display an ellipse
	background(0);

    //Displays the image at center point

    fill(255, 0, 0);//Red

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);


    //draw the image
    image(img, width/2, height/2);
}

function drawTwo(){//Display an ellipse that follows the mouse
	background(0);//Black

    //Displays the image at center point
    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(255, 255, 0);//Yellow

    ellipse(posX, posY, 100, 100);
    
}

function drawThree(){//Display text
	background(255, 0, 0);    

    //draw the image
    image(img, width/2, height/2);

    chooseNewItem();
    fill(255, 255, 0);
    text(displayString, 100, 100);
}

function drawFour(){//Shrink picture
	background(0);//Black
    
    //draw the image
    image(img, width/2*3, height/2*3);
}

function drawFive(){//Display triangle
	background(255, 255 , 0);

    fill(0, 128, 0);//Green

    triangle((width/8), (width/8), (width/8), (width/8), (width/8), (width/8));
    
    //draw the image
    image(img, width/2, height/2);
}

//chooses a new items from the array, select a random
//index 0 to length of array-1
function chooseNewImage(){
	img=random(imageList);
	print(img);
}

// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewItem() {
  displayString=random(stringList);
  print(displayString);
}

function mousePressed() {
  bRegular=!bRegular;

  setState();
}

function setState(){
	stateList=["Ellipse", "mouseFollow", "displayText", "shrinkPic", "Triangle", "normalPic"];

    state=random(stateList);    

    chooseNewImage();

	return state;
 }
