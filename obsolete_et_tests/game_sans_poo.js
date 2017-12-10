var canvas  = this.document.querySelector('#canvas');
canvas.height = 600;
canvas.width = 1200;
var context = canvas.getContext('2d');
var bruceNormal = new Image();
bruceNormal.src = ('images/blright.png');
var jumped = false;
var blnHeight = bruceNormal.height;
var blnWidth = bruceNormal.width;
var bruceX = (canvas.width-blnWidth)/2;
var bruceY = canvas.height - bruceNormal.height - 10;
var orientation = "";

var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

this.document.addEventListener("keydown", keyDownHandler, false);
this.document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) 
{
    if(e.keyCode == 39) 
    {
        rightPressed = true;
    }
    else if(e.keyCode == 37) 
    {
        leftPressed = true;
    }
    else if(e.keyCode == 32) 
    {
        spacePressed = true;
        jumped = true ;
    }
}

function keyUpHandler(e) 
{
    if(e.keyCode == 39) 
    {
        rightPressed = false;
    }
    else if(e.keyCode == 37) 
    {
        leftPressed = false;
    }
    else if(e.keyCode == 32) 
    {
        spacePressed = false;
    }
}

function drawBruce() 
{
    context.drawImage(bruceNormal, bruceX, bruceY);
}

function draw() 
{
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBruce();
    
    if(rightPressed && bruceX < canvas.width-blnWidth) 
    {
        orientation = "right";
        bruceX += 100;
        bruceNormal.src = ('images/blright.png'); 
    }
    else if(leftPressed && bruceX > 0) 
    {
        orientation = "left" ;
        bruceX -= 100;
        bruceNormal.src = ('images/blleft.png'); 
    }
    
    else if(spacePressed) 
    {
        bruceY -= 250;
        jumped = true; 
        if (orientation == "left")
        {
          bruceNormal.src = ('images/bljleft.png');   
        }
        else
        {
            bruceNormal.src = ('images/bljright.png');         
        }
        
    }
    else if(!spacePressed && jumped)
        {
            jumped = false;
            if(orientation == "left")
            {
                    bruceNormal.src = ('images/blleft.png');
            }
            else
            {
                    bruceNormal.src = ('images/blright.png');
            }
            
            bruceY =  canvas.height - bruceNormal.height - 10;
        }
}

setInterval(draw, 100);