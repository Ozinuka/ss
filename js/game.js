/*********************************************************************************************************************************************/
                                                            //CANVAS
/*********************************************************************************************************************************************/
//Canvas
var canvas  = this.document.querySelector('#canvas');
canvas.height = 600;
canvas.width = 1200;
var context = canvas.getContext('2d');

/*********************************************************************************************************************************************/
                                                            // CHARACTER
/*********************************************************************************************************************************************/
//Constructeur du personnage
function Character(right, left, jumpLeft, jumpRight, jumped, x, y, orientation) {
    this.picture = new Image();
    this.picture.src =  (right);
    this.right = (right);
    this.left = (left);
    this.jumpLeft = (jumpLeft);
    this.jumpRight = (jumpRight);
    this.jumped = jumped;
    this.posX = x;
    this.posY = y;
    this.orientation = orientation;
}

Character.prototype.setPosition = function (newX, newY) {
    this.posX = newX;
    this.posY = newY;
};

//Initialisation du personnage
var bruce = new Character('images/blright.png', 'images/blleft.png', 'images/bljleft.png', 'images/bljright.png', false, 0, 0, "right");
var bruceX = (canvas.width - bruce.picture.width) / 2;
var bruceY = canvas.height - bruce.picture.height - 10;
bruce.setPosition(bruceX, bruceY);

/*********************************************************************************************************************************************/
                                                                // Weapons
/*********************************************************************************************************************************************/
//Constructeur des armes
function Weapon(right, left, down, x, y, orientation) {
    this.picture = new Image();
    this.picture.src =  (left);
    this.right = (right);
    this.left = (left);
    this.down = (down);
    this.posX = x;
    this.posY = y;
    this.orientation = orientation;
}

Weapon.prototype.setPosition = function (newX, newY) {
    this.posX = newX;
    this.posY = newY;
};

//Initialisation d'arme
var spear = new Weapon('images/spearLeft.png', 'images/spearLeft.png', 'images/spearDown.png', 0, 0, "left");
var spearX = canvas.width;
var spearY = canvas.height / 1.25;
spear.setPosition(spearX, spearY);


/*********************************************************************************************************************************************/
                                                        //DIRECTIONS & MOUVEMENTS
/*********************************************************************************************************************************************/

//Initialisation des variables de directions
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

//Gestion évenementielle des touches
function keyDownHandler(e) {
    if (e.keyCode == 39) 
    {
        rightPressed = true;
    }
    else if (e.keyCode == 37) 
    {
        leftPressed = true;
    }
    else if (e.keyCode == 32) 
    {
        spacePressed = true;
        bruce.jumped = true ;
    }
}

function keyUpHandler(e) 
{
    if (e.keyCode == 39) 
    {
        rightPressed = false;
    }
    else if (e.keyCode == 37) 
    {
        leftPressed = false;
    }
    else if (e.keyCode == 32) 
    {
        spacePressed = false;
    }
}

this.document.addEventListener("keydown", keyDownHandler, false);
this.document.addEventListener("keyup", keyUpHandler, false);

/*********************************************************************************************************************************************/
                                                            //AFFICHAGE
/*********************************************************************************************************************************************/

function drawBruce() 
{
    context.drawImage(bruce.picture, bruce.posX, bruce.posY);
}

function drawWeapon() 
{
    context.drawImage(spear.picture, spear.posX, spear.posY);
}

function draw() 
{
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBruce();
    drawWeapon();
    
    if (rightPressed && bruce.posX < (canvas.width - bruce.picture.width))
    {
        bruce.orientation = "right";
        bruce.posX += 100;
        bruce.picture.src = bruce.right; 
    }
    else if (leftPressed && bruce.posX > bruce.picture.width) 
    {
        bruce.orientation = "left" ;
        bruce.posX -= 100;
        bruce.picture.src = bruce.left; 
    }
    
    else if (spacePressed && bruce.posY < canvas.height-bruce.picture.height) 
    {
        if (bruce.posY <= (canvas.height - bruce.picture.height - 10))
        {
            bruce.posY -= 250;
            bruce.jumped = true; 
            /*
                // Saut + direction
                if (rightPressed && bruce.posX < (canvas.width - bruce.picture.width))
                    {
                        bruce.orientation = "right";
                        bruce.posX += 100;
                        bruce.picture.src = bruce.jumpRight; 
                    }
                    else if (leftPressed && bruce.posX > 0) 
                    {
                        bruce.orientation = "left" ;
                        bruce.posX -= 100;
                        bruce.picture.src = bruce.jumpLeft; 
                    }
            */
            if (bruce.orientation == "left")
            {
              bruce.picture.src = bruce.jumpLeft;   
            }
            else
            {
                bruce.picture.src = bruce.jumpRight;         
            }
        }
    }
    else if (!spacePressed && bruce.jumped)
        {
            bruce.jumped = false;
            if (bruce.orientation == "left")
            {
                    bruce.picture.src = bruce.left;
            }
            else
            {
                bruce.picture.src = bruce.right;
            }

           bruce.posY =  canvas.height - bruce.picture.height - 10;
        }
    
    if (spear.orientation == "left" && spear.posX > 0 - spear.picture.width)
    {
        spear.posX -= 100; 
    }
    else if (spear.orientation == "right" && spear.posX < canvas.width + spear.picture.width)
    {
        spear.posX -= 100; 
    }
}

        
setInterval(draw, 100);



