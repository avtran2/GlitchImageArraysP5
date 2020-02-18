/*
	Glitch Image Arrays
	by: Alvin Tran

	Use images and other shape-drawing techniques with timers using millis() to create erratic behavior.

	python -m SimpleHTTPServer 8080
*/

var regularImg; // Declare variable 'img'.
var inverseImg;
var bRegular=true;
var imageList=[];
var stringList;
var img

var startMillis;

var posX, posY;

//State machines that determines emotions
var state; //will change
var stateList;

// preload() will execture before setup()
function preload(){
  imageList[0]=loadImage('assets/image1.jpg'); 			
  imageList[1]=loadImage('assets/image2.jpg');
  imageList[2]=loadImage('assets/image3.jpg');
  imageList[3]=loadImage('assets/image4.jpg');
  imageList[4]=loadImage('assets/image5.jpg');
  imageList[5]=loadImage('assets/image6.jpg');  
  stringList=["Help Me Please!", "Flee, Flee For Your Lives", "We Are Doomed!", "Tonight, We Are Doomed!", "Save Yourselves!", "Please Help!"];
}

function setup(){
	print("imageSequenceP5 Example");

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

function mousePressed(){
  bRegular=!bRegular;

  chooseNewItem();
}

function keyPressed(){
  if(key===' '){
  	bRegular=!bRegular;
  }

  chooseNewItem();
}

function drawZero(){
	background(0);

    //Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();
    
    //draw the image
    image(img, width/2, height/2);
}

function drawOne(){
	background(135, 206, 250);

    //Displays the image at center point
    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);
    //image(img, width/2, height/2, random(mouseX), random(mouseY));

    chooseNewImage();

    //draw the image
    image(img, width/2, height/2);
}

function drawTwo(){
	background(0);

    //Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
    chooseNewImage();

    fill(255, 255, 0);
    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;
    fill(255, 255, 0);
    ellipse(posX, posY, 100, 100);
    
    //draw the image
    image(img, width/2, height/2);
}

function drawThree(){
	background(255, 0, 0);

	//When timer expires, after 1000ms, choose a new random image
    //Displays the image at center point
    //image(img, width/2, height/2, random(mouseX), random(mouseY));
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

    triangle((width/4.45), (width/5.32), (width/1.29), (width/5.32), (width/2), (width/12.5));
    
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