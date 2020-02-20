/*
    Glitch Image Arrays
    by: Alvin Tran

    Use images and other shape-drawing techniques to display several different states
*/

var img;//Declare variable 'img'.
var imageList=[];
var stringList;

var bRegular=true;

var posX;
var posY;

//State machines that determines display
var state;//will change
var stateList;

// preload() will execture before setup()
function preload(){
  imageList[0]=loadImage('image1.jpg');             
  imageList[1]=loadImage('image2.jpg');
  imageList[2]=loadImage('image3.jpg');
  imageList[3]=loadImage('image4.jpg');
  imageList[4]=loadImage('image5.jpg');
  stringList=["Hi there!", "Hello!", "How are you doing?"];
}

function setup(){
    print("Glitch Image Array");

    imageMode(CENTER);

    chooseNewImage();
  
    createCanvas(1024, 800);

    startMillis=millis();
}

function draw(){
    if(state=="redEllipse")
        drawRedEllipse();    
    else if(state=="yellowEllipse")
        drawYellowEllipse();
    else if(state=="greenEllipse")
        drawGreenEllipse();
    else if(state=="displayText")
        drawText();
    else if(state=="mouseFollowRed")
        drawRedEllipse();
    else if(state=="mouseFollowYellow")
        drawYellowFollow(); 
    else if(state=="mouseFollowGreen")
        drawGreenFollow();
    else if(state="normalPic")
        drawNormal();
}

function drawNormal(){//Normal display
    background(0);//Black
    image(img, width/2, height/2);
}

function drawRedEllipse(){//Display a red ellipse behind the picture
    background(0);//Black

    //Displays the image at center point

    fill(255, 0, 0);//Red

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);

    //draw the image
    image(img, width/2, height/2);
}

function drawYellowEllipse(){//Display a yellow ellipse behind the picture
    background(0);

    //Displays the image at center point

    fill(255, 255, 0);//Yellow

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);

    //draw the image
    image(img, width/2, height/2);
}

function drawGreenEllipse(){//Display a green ellipse behind the picture
    background(0);//Black

    //Displays the image at center point

    fill(0, 128, 0);//Green

    var pictureDiameter=width/1.2;
    ellipse((width/2), (height/2), pictureDiameter, pictureDiameter);

    //draw the image
    image(img, width/2, height/2);
}

function drawText(){//Display text
    background(255, 0, 0);    

    //draw the image
    image(img, width/2, height/2);

    fill(255, 255, 0);
    text(displayString, 100, 100);
}

function drawRedFollow(){//Display a red ellipse that follows the mouse
    background(0);//Black

    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(255, 0, 0);//Red

    ellipse(posX, posY, 100, 100);//Ellipse that follows mouse cursor
}

function drawYellowFollow(){//Display a yellow ellipse that follows the mouse
    background(0);//Black

    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(255, 255, 0);//Yellow

    ellipse(posX, posY, 100, 100);//Ellipse that follows mouse cursor    
}

function drawGreenFollow(){//Display a green ellipse that follows the mouse
    background(0);//Black

    //draw the image
    image(img, width/2, height/2);

    posX=mouseX;
    posY=mouseY;

    posX+=(mouseX-posX)/10;
    posY+=(mouseY-posY)/10;

    fill(0, 128, 0);//Green

    ellipse(posX, posY, 100, 100);//Ellipse that follows mouse cursor
}

//chooses a new items from the array, select a random
//index 0 to length of array-1
function chooseNewImage(){//Selects a random image to display
    img=random(imageList);
    print(img);
}

// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewItem(){//Selects a random string to display
  displayString=random(stringList);
  print(displayString);
}

function mousePressed(){//Checks to see if the mouse is pressed
  bRegular=!bRegular;

  setState();
}

function setState(){//Randomly sets the state from an array of strings
    stateList=["redEllipse", "yellowEllipse", "greenEllipse", "displayText", "mouseFollowRed", "mouseFollowYellow", "mouseFollowGreen", "normalPic"];

    state=random(stateList);    

    chooseNewImage();    
    chooseNewItem();

    return state;
 }
