-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 08, 2022 at 10:28 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BoutiqueNook`
--

-- --------------------------------------------------------

--
-- Table structure for table `meubles`
--

CREATE TABLE `meubles` (
  `id` int(10) NOT NULL,
  `nom`varchar(256) NOT NULL,
  `description` text DEFAULT NULL,
  `photo1` text NOT NULL,
  `photo2` text DEFAULT NULL,
  `photo3` text DEFAULT NULL,
  `photo4` text DEFAULT NULL,
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

INSERT INTO `meubles` (`id`, `nom`,`description`, `photo1`, `type`, `couleur`, `matière`, `largeur`, `longueur`, `hauteur`, `prix`, `statut`, `vendeur_id`) VALUES
(1, "armoire marron", "test", "https://static.wikia.nocookie.net/animalcrossing/images/0/03/NH-Furniture-Antique_wardrobe.png/revision/latest/scale-to-width-down/128?cb=20200617084648&path-prefix=fr", 'armoire ', 'marron', 'bois', 100, 50, 200, 450, 'disponible', 1),
(2, "lit marron", NULL, "https://static.wikia.nocookie.net/animalcrossing/images/6/62/NH-Furniture-Antique_bed.png/revision/latest/scale-to-width-down/128?cb=20200617085519&path-prefix=fr", 'lit ', 'marron', 'bois', 140, 190, 40, 1700, 'disponible', 1),
(3, "chaise rouge", NULL, "https://jeuxpourtous.org/wp-content/uploads/2020/06/1591623704_148_%E3%80%90ACNH-Set-Ensemble-de-meubles-de-fruits-Liste-complete.png", 'chaise', 'rouge', 'pomme', NULL, NULL, NULL, 200, 'disponible', 2);

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
(3, 'camille@test.com', 'test', 'Camille', 'acheteur');

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;