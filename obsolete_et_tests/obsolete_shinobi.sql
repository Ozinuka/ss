CREATE DATABASE shinobi;

USE shinobi;


CREATE TABLE users
(
	login VARCHAR(20), 
	pass VARCHAR(20),
	adr_mail VARCHAR(50),
	birth DATE,
	PRIMARY KEY (login)						
);	

CREATE TABLE levels_games	
(
	num_level_game INT(2),
	time_level INT(5),
	PRIMARY KEY (num_level_game)	
);
										

					
CREATE TABLE games	
(
	num_level_game INT(2),
	score_game INT(5),
	user_login VARCHAR(20),
	PRIMARY KEY (num_level_game,score_game,user_login)	
);
					


CREATE TABLE users_records
(
	user_login VARCHAR(20), 
	num_level_game INT(2),
	score_record INT(5),
	PRIMARY KEY (user_login,num_level_game,score_record)	
);					
										
										
										
ALTER TABLE games
ADD CONSTRAINT fk_games_users FOREIGN KEY (user_login) REFERENCES users(login);

ALTER TABLE games
ADD CONSTRAINT fk_games_levels_games FOREIGN KEY (num_level_game) REFERENCES levels_games(num_level_game);

ALTER TABLE users_records
ADD CONSTRAINT fk_games_users FOREIGN KEY (user_login) REFERENCES users(login);

ALTER TABLE users_records
ADD CONSTRAINT fk_games_levels_games FOREIGN KEY (num_level_game) REFERENCES levels_games(num_level_game);

