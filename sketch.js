/*
	Glitch Image Arrays
	by: Alvin Tran

	Use images and other shape-drawing techniques with timers using millis() to create erratic behavior.

*/

var img; // Declare variable 'img'.
var imageList=[];
var stringList;

var bRegular=true;

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
	background(0);

    //Displays the image at center point
    chooseNewImage();
    
    //draw the image
    image(img, width/2, height/2);
}

function drawOne(){//Display an ellipse
	background(0);

    //Displays the image at center point

    fill(255, 0, 0);//Red

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

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(255, 255, 0);//Yellow

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

    fill(0, 128, 0);//Green

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

function mousePressed() {
  bRegular=!bRegular;

  chooseNewItem();
}

function setState(){
	stateList=["Ellipse", "mouseFollow", "displayText", "shrinkPic", "Triangle", "normalPic"];

    bRegular=!bRegular;
    state=random(stateList);

	return state;
 }
