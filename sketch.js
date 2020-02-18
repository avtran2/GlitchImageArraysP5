/*
	Glitch Image Arrays
	by: Alvin Tran

	Use images and other shape-drawing techniques with timers using millis() to create erratic behavior.

*/

var img; // Declare variable 'img'.
var imageList=[];
var stringList=;

var startMillis;

var posX, posY;

var red;
var yellow;
var green;

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
  imageList[5]=loadImage('image6.jpg');  
  stringList=["Help Me Please!", "Flee, Flee For Your Lives!", "We Are Doomed!", "Tonight, We Are Doomed!", "Save Yourselves!", "Please Help!"];
}

function setup(){
	print("Glitch Image Array");

	imageMode(CENTER);

	chooseNewImage();
  
	createCanvas(1024, 800);

	startMillis=millis();
}

function main(){
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
	background(0);

    //Displays the image at center point
    chooseNewImage();
    
    //draw the image
    image(img, width/2, height/2);
}

function drawOne(){//Display an ellipse
	background(135, 206, 250);

    //Displays the image at center point

    red=color(255, 0, 0);
    fill(red);

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);

    chooseNewImage();

    //draw the image
    image(img, width/2, height/2);
}

function drawTwo(){//Display an ellipse that follows the mouse
	background(0);

    //Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();

    fill(255, 255, 0);
    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    yellow=color(255, 255, 0);
    fill(yellow);

    ellipse(posX, posY, 100, 100);
    
    //draw the image
    image(img, width/2, height/2);
}

function drawThree(){//Display text
	background(255, 0, 0);

    chooseNewImage();

    chooseNewItem();
    fill(255, 255, 0);
    text(displayString, 100, 100);
    
    //draw the image
    image(img, width/2, height/2);
}

function drawFour(){
	background(0);
    chooseNewImage();    
    
    //draw the image
    image(img, width/2*3, height/2*3);
}

function drawFive(){
	background(255, 255 , 0);

    chooseNewImage();  

    green=color(0, 0);
    fill(green);

    triangle((width/2), (width/2), (width/2), (width/2), (width/2), (width/2));
    
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

function setState(){
	stateList=["Ellipse", "mouseFollow", "displayText", "shrinkPic", "5", "normalPic"];

	if(millis()>startMillis+450)
	{
		state=random(stateList);
		startMillis=millis();
	}

	return state;
 }