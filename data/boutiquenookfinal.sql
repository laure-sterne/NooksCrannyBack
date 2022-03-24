-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 17 mars 2022 à 11:11
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `boutiquenook`
--

-- --------------------------------------------------------

--
-- Structure de la table `meubles`
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
-- Déchargement des données de la table `meubles`
--

INSERT INTO `meubles` (`id`, `nom`, `description`, `photo1`, `photo2`, `photo3`, `photo4`, `type`, `couleur`, `matière`, `largeur`, `longueur`, `hauteur`, `prix`, `statut`, `vendeur_id`) VALUES
(1, 'Lit poire', 'lit poire', 'https://newhorizonsinventory.com/images/items-png/FtrFruitsBedS_Remake_0_0.png', 'https://jeuxpourtous.org/wp-content/uploads/2020/06/1591623711_835_%E3%80%90ACNH-Set-Ensemble-de-meubles-de-fruits-Liste-complete.png', NULL, NULL, 'lit', 'vert', 'bois', 100, 50, 200, 10880, 'disponible', 1),
(2, 'Etagère impériale', 'étagère de style impérial', 'https://newhorizonsinventory.com/images/items-png/FtrOrientalShelfWall_Remake_0_0.png', 'https://jeuxpourtous.org/wp-content/uploads/2020/08/1597930883_541_%E3%80%90Animal-Crossing%E3%80%91-Liste-des-ensembles-de-meubles-%E3%80%90ACNH%E3%80%91-GameWith.jpeg', NULL, NULL, 'étagère', 'rouge', 'bois', 140, 190, 40, 8500, 'disponible', 1),
(3, 'Chaise pomme', 'chaise pomme', 'https://newhorizonsinventory.com/images/items-png/FtrFruitsChairApple_Remake_0_0.png', 'data:image/jpeg;base64,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', NULL, NULL, 'chaise', 'rouge', 'pomme', NULL, NULL, NULL, 99200, 'disponible', 2),
(4, 'téléphone ancien', 'joli téléphone vintage', 'https://newhorizonsinventory.com/images/items-png/FtrAntiquePhoneW_Remake_1_0.png\r\n\r\n\r\n', NULL, NULL, NULL, 'téléphone fixe', 'jaune', 'bois', NULL, NULL, NULL, 1600, 'disponible', 3),
(5, 'Borne d\'arcade de tir', 'borne arcade ', 'https://newhorizonsinventory.com/images/items-png/FtrArcadegameShooting.png', NULL, NULL, NULL, 'console', 'bleu', 'plastique', 60, 70, 156, 8000, 'disponible', 2),
(6, 'Tableau la laitière', 'la laitière ', 'https://newhorizonsinventory.com/images/items-png/FtrArtMilkmaid.png', NULL, NULL, NULL, 'tableau ', 'jaune, bleu, beige, blanc, orange', 'peinture', 120, 80, NULL, 4980, 'disponible', 3),
(7, 'Bibliothèque ', 'bibliothèque vintage ', 'https://newhorizonsinventory.com/images/items-png/FtrBookshelf_Remake_2_0.png', NULL, NULL, NULL, 'meuble de rangement ', 'marron ', 'chêne massif', 60, 200, 180, 5600, 'disponible', 4),
(8, 'Canapé ', 'canapé tronc', 'https://newhorizonsinventory.com/images/items-png/FtrLogSofaL_Remake_3_0.png', NULL, NULL, NULL, 'canapé', 'blanc cassé', 'bois, coton', 90, 200, 80, 7000, 'disponible', 4),
(9, 'Lit ancien', 'lit en bois noir', 'https://newhorizonsinventory.com/images/items-png/FtrAntiqueBedW_Remake_2_0.png', NULL, NULL, NULL, 'lit', 'noir', 'bois', NULL, NULL, NULL, 28000, 'disponible', 1),
(10, 'Chaise bambin rose', 'chaise pour enfant rose', 'https://newhorizonsinventory.com/images/items-png/FtrBabychair_Remake_1_0.png', NULL, NULL, NULL, 'chaise', 'rose', 'fer', 50, 50, 70, 1200, 'disponible', 2),
(11, 'Etagère bambou', 'étagère en bambou naturel', 'https://newhorizonsinventory.com/images/items-png/FtrBambooShelf_Remake_1_0.png', NULL, NULL, NULL, 'étagère', 'beige', 'bambou', NULL, NULL, NULL, 9600, 'disponible', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(10) NOT NULL,
  `mail` varchar(256) NOT NULL,
  `mdp` varchar(256) NOT NULL,
  `pseudo` varchar(256) NOT NULL,
  `statut` varchar(40) NOT NULL DEFAULT 'acheteur'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `mail`, `mdp`, `pseudo`, `statut`) VALUES
(1, 'tom@nook.ac', 'Plouf', 'TomNook', 'admin'),
(2, 'victoire.stahl@gmail.com', 'Bloup', 'vico', 'acheteur'),
(3, 'camille@test.com', 'test', 'Camille', 'acheteur'),
(4, 'baptiste@gmail.io', 'bap', 'baba', 'acheteur');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `meubles`
--
ALTER TABLE `meubles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendeur_id` (`vendeur_id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
