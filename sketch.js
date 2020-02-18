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
	else if(state=="mouseFollowYellow")
		drawTwo();
	else if(state=="displayText")
		drawThree();
	else if(state=="mouseFollowGreen")
		drawFour();
	else if(state=="mouseFollowRed")
		drawFive();
	else if(state="normalPic")
		drawZero();
}

function drawZero(){//Normal display
	background(0);//Black
    image(img, width/2, height/2);
}

function drawOne(){//Display a red ellipse behind the picture
	background(0);

    //Displays the image at center point

    fill(255, 0, 0);//Red

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);


    //draw the image
    image(img, width/2, height/2);
}

function drawTwo(){//Display a yellow ellipse that follows the mouse
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

function drawFour(){//Display a green ellipse that follows the mouse
	background(0);//Black

    //Displays the image at center point
    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(0, 128, 0);//Green

    ellipse(posX, posY, 100, 100);
}

function drawFive(){//Display a red ellipse that follows the mouse
	background(0);//Black

    //Displays the image at center point
    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(255, 0, 0);//Red

    ellipse(posX, posY, 100, 100);
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
	stateList=["Ellipse", "mouseFollowYellow", "displayText", "mouseFollowGreen", "mouseFollowRed", "normalPic"];

    state=random(stateList);    

    chooseNewImage();

	return state;
 }
