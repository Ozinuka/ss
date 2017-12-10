-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Dim 26 Novembre 2017 à 12:21
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `shinobi`
--
CREATE DATABASE IF NOT EXISTS `shinobi` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `shinobi`;

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

CREATE TABLE `games` (
  `num_level_game` int(2) NOT NULL,
  `score_game` int(5) NOT NULL,
  `user_login` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `levels_games`
--

CREATE TABLE `levels_games` (
  `num_level_game` int(2) NOT NULL,
  `time_level` int(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `login` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `adr_mail` varchar(50) NOT NULL,
  `birth` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`login`, `pass`, `adr_mail`, `birth`) VALUES
('chakeu_m', 'test', 'chakeu_m@etna-alternance.net', '1991-06-08');

-- --------------------------------------------------------

--
-- Structure de la table `users_records`
--

CREATE TABLE `users_records` (
  `user_login` varchar(20) NOT NULL,
  `num_level_game` int(2) NOT NULL,
  `score_record` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`num_level_game`,`score_game`,`user_login`),
  ADD KEY `fk_games_users` (`user_login`);

--
-- Index pour la table `levels_games`
--
ALTER TABLE `levels_games`
  ADD PRIMARY KEY (`num_level_game`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`);

--
-- Index pour la table `users_records`
--
ALTER TABLE `users_records`
  ADD PRIMARY KEY (`user_login`,`num_level_game`,`score_record`),
  ADD KEY `fk_games_levels_games` (`num_level_game`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
