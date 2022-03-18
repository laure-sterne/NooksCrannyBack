-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 18, 2022 at 08:54 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boutiquenook`
--

-- --------------------------------------------------------

--
-- Table structure for table `meubles`
--

CREATE TABLE `meubles` (
  `id` int(10) NOT NULL,
  `nom` varchar(256) NOT NULL,
  `description` text,
  `photo1` text NOT NULL,
  `photo2` text,
  `photo3` text,
  `photo4` text,
  `type` varchar(256) NOT NULL,
  `couleur` varchar(256) NOT NULL,
  `matière` varchar(256) NOT NULL,
  `largeur` int(11) DEFAULT NULL,
  `longueur` int(11) DEFAULT NULL,
  `hauteur` int(11) DEFAULT NULL,
  `prix` int(11) NOT NULL,
  `statut` varchar(256) NOT NULL DEFAULT 'disponible',
  `vendeur_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meubles`
--

INSERT INTO `meubles` (`id`, `nom`, `description`, `photo1`, `photo2`, `photo3`, `photo4`, `type`, `couleur`, `matière`, `largeur`, `longueur`, `hauteur`, `prix`, `statut`, `vendeur_id`) VALUES
(1, 'Lit poire', 'lit poire', 'https://newhorizonsinventory.com/images/items-png/FtrFruitsBedS_Remake_0_0.png', NULL, NULL, NULL, 'lit', 'vert', 'bois', 100, 50, 200, 10880, 'disponible', 1),
(2, 'Etagère impériale', 'étagère de style impérial', 'https://newhorizonsinventory.com/images/items-png/FtrOrientalShelfWall_Remake_0_0.png', NULL, NULL, NULL, 'étagère', 'rouge', 'bois', 140, 190, 40, 8500, 'disponible', 1),
(3, 'Chaise pomme', 'chaise pomme', 'https://newhorizonsinventory.com/images/items-png/FtrFruitsChairApple_Remake_0_0.png', NULL, NULL, NULL, 'chaise', 'rouge', 'pomme', NULL, NULL, NULL, 99200, 'disponible', 2),
(4, 'téléphone ancien', 'joli téléphone vintage', 'https://newhorizonsinventory.com/images/items-png/FtrAntiquePhoneW_Remake_1_0.png\r\n\r\n\r\n', NULL, NULL, NULL, 'téléphone fixe', 'jaune', 'bois', NULL, NULL, NULL, 1600, 'disponible', 3),
(5, 'borne d\'arcade de tir', 'borne arcade ', 'https://newhorizonsinventory.com/images/items-png/FtrArcadegameShooting.png', NULL, NULL, NULL, 'console', 'bleu', 'plastique', 60, 70, 156, 8000, 'disponible', 2),
(6, 'tableau la laitière', 'la laitière ', 'https://newhorizonsinventory.com/images/items-png/FtrArtMilkmaid.png', NULL, NULL, NULL, 'tableau ', 'jaune, bleu, beige, blanc, orange', 'peinture', 120, 80, NULL, 4980, 'disponible', 3),
(7, 'bibliothèque ', 'bibliothèque vintage ', 'https://newhorizonsinventory.com/images/items-png/FtrBookshelf_Remake_2_0.png', NULL, NULL, NULL, 'meuble de rangement ', 'marron ', 'chêne massif', 60, 200, 180, 5600, 'disponible', 4),
(8, 'canapé ', 'canapé tronc', 'https://newhorizonsinventory.com/images/items-png/FtrLogSofaL_Remake_3_0.png', NULL, NULL, NULL, 'canapé', 'blanc cassé', 'bois, coton', 90, 200, 80, 7000, 'disponible', 4);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(10) NOT NULL,
  `mail` varchar(256) NOT NULL,
  `mdp` varchar(256) NOT NULL,
  `pseudo` varchar(256) NOT NULL,
  `statut` varchar(40) NOT NULL DEFAULT 'acheteur'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `mail`, `mdp`, `pseudo`, `statut`) VALUES
(1, 'tom@nook.ac', 'Plouf', 'TomNook', 'admin'),
(2, 'victoire.stahl@gmail.com', 'Bloup', 'vico', 'acheteur'),
(3, 'camille@test.com', 'test', 'Camille', 'acheteur'),
(4, 'baptiste@gmail.io', 'bap', 'baba', 'acheteur');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meubles`
--
ALTER TABLE `meubles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendeur_id` (`vendeur_id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
