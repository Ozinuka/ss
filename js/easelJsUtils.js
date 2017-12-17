(function(){
	
	var Graphics = createjs.Graphics;
	var Shape = createjs.Shape;
	var SpriteSheet = createjs.SpriteSheet;
    var Sprite = createjs.Sprite;
	
    /**
	 * Constructeur
	 */
	EaselJsUtils = function(stage) {
		this.stage = stage;
	};
	
	/**
	 * Classe EaselJsUtils
	 */
	EaselJsUtils.prototype = {
			
			/**
			 * Créer et afficher un média
			 * @param String src : source du média
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createBitmap: function(src, x, y, options) {
				// Définir la source et la position du média
				var bitmap = new createjs.Bitmap(src);
				bitmap.x = x;
				bitmap.y = y;
				// Appliquer les options
				if (options) {
					// Mise à l'échelle
					if (options.scale) {
						bitmap.scaleX = options.scale[0];
						bitmap.scaleY = options.scale[1];
					}
				}
				// Ajouter le Bitmap au Stage et le retourner
				this.stage.addChild(bitmap);
				return bitmap;
			},
			
        
        createPlayer: function(x, y) {
        // Préparer les données de la Spritesheet
        var data = {
                // image | spritesheet
                images: [
                            "sprites/ninja.png"
                        ],
                // définition des frames
                frames: [
                        // x, y, width, height, imageIndex, regX, regY
                            [1, 1, 113, 68, 0, 113/2, 68],//0 DEAD
                            [1, 1, 113, 68, 0, 113/2, 68],//1 DEAD
                            [1, 1, 113, 68, 0, 113/2, 68],//2 DEAD
                            [1, 1, 113, 68, 0, 113/2, 68],//3 DEAD
                            [116, 1, 111, 73, 0, 111/2, 73],//4 DEAD
                            [229, 1, 108, 77, 0, 116/2, 77],//5 DEAD
                            [339, 1, 93, 88, 0, 93/2, 88],//6 SLIDE
                            [434, 1, 58, 110, 0, 58/2, 110],//7 IDLE
                            [1, 71, 93, 88, 0, 93/2, 88],//8 SLIDE
                            [96, 76, 93, 88, 0,93/2, 88],//9 SLIDE
                            [191, 80, 92, 88, 0, 92/2, 88],//10 SLIDE
                            [285, 91, 91, 88, 0, 91/2, 88],//11 SLIDE
                            [378, 113, 91, 88, 0, 91/2, 88],//12 SLIDE
                            [1, 161, 91, 88, 0, 91/2, 88],//13 SLIDE
                            [94, 166, 92, 88, 0, 92/2, 88],//14 SLIDE
                            [188, 170, 93, 88, 0, 93/2, 88],//15 SLIDE
                            [283, 181, 93, 88, 0, 93/2, 88],//16 SLIDE
                            [378, 203, 98, 95, 0, 98/2, 95],//17 DEAD
                            [1, 251, 82, 104, 0, 82/4, 104],//18 RUN
                            [85, 256, 86, 106, 0, 86/2, 106],//19 JUMP
                            [85, 256, 86, 106, 0, 86/2, 106],//20 JUMP
                            [173, 260, 78, 108, 0, 78/2, 108],//21 JUMP
                            [253, 271, 89, 108, 0, 89/2, 108],//22 RUN
                            [344, 300, 84, 109, 0, 84/2, 109],//23 RUN
                            [430, 300, 58, 110, 0, 58/2,110],//24 IDLE
                            [430, 300, 58, 110, 0, 58/2, 110],//25 IDLE
                            [1, 357, 58, 110, 0, 58/2, 110],//26 IDLE
                            [1, 357, 58, 110, 0, 58/2, 110],//27 IDLE
                            [61, 364, 87, 110, 0, 87/2, 110],//28 DEAD
                            [150, 370, 58, 110, 0, 58/2, 110],//29 IDLE
                            [150, 370, 58, 110, 0, 58/2, 110],//30 IDLE
                            [210, 381, 58, 110, 0, 58/2, 110],//31 IDLE
                            [210, 381, 58, 110, 0, 58/2, 110],//32 IDLE
                            [270, 381, 58, 110, 0, 58/2, 110],//33 IDLE
                            [330, 411, 72, 110, 0, 72/110, 110],//34 JUMP
                            [404, 412, 90, 110, 0, 90/2, 110],//35 RUN
                            [1, 476, 84, 110, 0, 84/2, 110],//36 RUN
                            [87, 476, 61, 116, 0, 61/2, 116],//37 DEAD
                            [150, 493, 81, 110, 0, 81/2, 110],//38 RUN
                            [233, 493, 67, 111, 0, 67/2, 111],//39 JUMP
                            [233, 493, 67, 111, 0, 67/2, 111],//40 JUMP
                            [233, 493, 67, 111, 0, 67/2, 111],//41 JUMP
                            [302, 523, 84, 111, 0, 84/2, 111],//42 RUN
                            [388, 524, 69, 112, 0, 69/2, 112],//43 DEAD
                            [1, 588, 66, 112, 0, 66/2, 112],//44 JUMP
                            [69, 594, 74, 113, 0, 74/2, 112],//45 JUMP
                            [145, 605, 83, 114, 0, 83/2, 114],//46 RUN
                            [230, 606, 70, 117, 0, 70/2, 117],//47 JUMP
                            [302, 636, 82, 114, 0, 82/2, 114],//48 RUN
                            [386, 638, 84, 114, 0, 84/2, 114]//49 RUN
                    ],
                // définition des animations
                    animations: {
                                    dead: { frames: [37, 43, 28, 17, 5, 4, 0, 1, 2, 3] },
                                    slide: { frames: [6, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
                                    idle: { frames: [7, 24, 26, 29, 31, 33, 32, 30, 27, 25] },
                                    run: { frames: [42, 46, 48, 22, 35, 36, 49, 38, 18, 23] },
                                    jump: { frames: [45, 47, 44, 39, 40, 41, 34, 21, 19, 20] }
                    },
            };
            
            // Instancier la SpriteSheet
            var spriteSheet = new SpriteSheet(data);
            // Instancier le Sprite
            var sprite = new Sprite(spriteSheet, 'idle');
            // Positionner l'image dans le canvas
            sprite.x = x;
            sprite.y = y;
            // Ajouter le Sprite au Stage
            this.stage.addChild(sprite);
            // Retourner le Sprite
            return sprite;
        },
        
        //Création de lance
        createSpear: function(x, y, orientation) {
        // Préparer les données de la Spritesheet
        var data = {
                    // image | spritesheet
                    images: [
                                "sprites/spear.png"
                            ],
                    // définition des frames
                    frames: [
                                // x, y, width, height
                                [1, 1, 180, 15, 0, 0, 0],
                                [1, 18, 180, 15, 0, 0, 0],
                                [183, 1, 15, 180, 0, 0, 0]
                            ],
                    // définition des animations
                        animations: {
                            left: { frames: [0] },
                            right: { frames: [1] },
                            down: { frames: [2] }
                        }
            };
            
            // Instancier la SpriteSheet
            var spriteSheet = new SpriteSheet(data);
            // Instancier le Sprite
            var sprite = new Sprite(spriteSheet, orientation);
            // Positionner l'image dans le canvas
            sprite.x = x;
            sprite.y = y;
            sprite.name = orientation;
            // Ajouter le Sprite au Stage
            this.stage.addChild(sprite);
            // Retourner le Sprite
            return sprite;
        }
	};
    
    
}());