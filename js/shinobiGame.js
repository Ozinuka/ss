(function() {
	
    var player = null;	// référence au Sprite Player
    var playerState = 'idle';
    var keys = [];
    var tabSpears = [];
    var orientations = ['left','right','down'];
	
    // Initialisation
	$(document).ready(function() {
		init();
	});
/*****************************************************************************/	
	// Fonction d'initialisation
	this.init = function() {
		prepareStage();
	 // Ajouter le Player au Stage
        addPlayer();
        addSpears();
		
    // Ajouter les listeners d'événements
        window.addEventListener('keydown', handleKeyDown); // touche clavier enfoncée
        window.addEventListener('keyup', handleKeyUp); // touche clavier relâchée
        
        startTicker(30);
        
	};
/*****************************************************************************/	
	// Préparer le stage et instancier EaselJsUtils
	this.prepareStage = function() {
		this.canvas = $('#shinobiSurvivorCanvas').get(0);
		this.stage = new createjs.Stage(this.canvas);
		easelJsUtils = new EaselJsUtils(this.stage);
	};
/*****************************************************************************/	
    // Ajouter le Player
    this.addPlayer = function() {
        player = easelJsUtils.createPlayer((canvas.width/2), (canvas.height - 50));
    };
/*****************************************************************************/
    // random number between min and max
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    // random orientation from the tab orientations
    function random_orientation(items){
        return items[Math.floor(Math.random()*items.length)];
    }
    
/*****************************************************************************/    	
    // Ajouter la lance
    this.addSpears = function() {
         /*spear = easelJsUtils.createSpear((canvas.width - 300), (canvas.height - 160)) ;*/
    
    for (i=0; i < 5; i++)
        {
            //x = Math.floor((Math.random() * 800) + 1;
            var orientation = random_orientation(orientations);
            
            if (orientation == 'left')
                {
                    x = 800;
                    y = getRndInteger(440, 560);
                    tabSpears[i] = easelJsUtils.createSpear(x, y,orientation);
                    
                }
            else if (orientation == 'right')
                {
                    x = 0;
                    y = getRndInteger(440, 560);
                    tabSpears[i] = easelJsUtils.createSpear(x, y, orientation);
                }
            else if (orientation == 'down')
                {
                    x= getRndInteger(20, 780);
                    y = 0;
                    tabSpears[i] = easelJsUtils.createSpear(x, y, orientation);
                }

                
        }
      };
/*****************************************************************************/
    // Démarrer le ticker
        this.startTicker = function(fps) {
        createjs.Ticker.setFPS(fps); // définir le nombre d'images par seconde
        createjs.Ticker.addEventListener("tick", function(){   
        handleInteractions(); // gérer les interactions
        for (j=0; j < tabSpears.length; j++)    
        {
            if (tabSpears[j].name == 'left')
                {
                    tabSpears[j].x -= 10;
                }
            else if (tabSpears[j].name == 'right')
                {
                    tabSpears[j].x += 10;
                }
            else if (tabSpears[j].name == 'down')
                {
                    tabSpears[j].y += 10;
                }
        }
            this.stage.update(); // mettre à jour l'affichage
        });
    };
 /*****************************************************************************/   
    // appuyer sur une touche
    this.handleKeyDown = function(evt) {
        keys[evt.keyCode] = true;
    };
    
    // relacher une touche
    this.handleKeyUp = function(evt) {
        keys[evt.keyCode] = false;
    };
    
    // Gérer les interactions
    this.handleInteractions = function() {
        // touches "gauche"
        if (keys[37]) {
            player.scaleX = -1; // retourner le Player vers la gauche
            if ('run' != playerState) {
                playerState = 'run';
                player.gotoAndPlay('run');
            }
            if (player.x > 0) {
                player.x -= 10;
            }
        } else if (keys[39]) {
            // touche "droite"
            player.scaleX = 1;  // retourner le Player vers la droite
            if ('run' != playerState) {
                playerState = 'run';
                player.gotoAndPlay('run');
            }
            if (player.x < 800) {
                player.x += 10;
            }
        } else if (keys[40]) {
            // touche "bas"
            if (player.y <= canvas.height - 10){
                playerState = 'slide';
                player.gotoAndPlay('slide');
            }   
        } else if (keys[38]) {
            // touche "haut"
            playerState = 'jump';
            player.gotoAndPlay('jump');
        } else {
            playerState = 'ilde';
            player.gotoAndPlay('ilde');
        }
    };
/*****************************************************************************/    
}());