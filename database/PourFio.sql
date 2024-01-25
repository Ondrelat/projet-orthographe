-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: projet_orthographe
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `descriptions`
--

DROP TABLE IF EXISTS `descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `helperId` int DEFAULT NULL,
  `typeId` int DEFAULT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_description_helper` (`helperId`),
  KEY `fk_description_type` (`typeId`),
  CONSTRAINT `fk_description_helper` FOREIGN KEY (`helperId`) REFERENCES `helpers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_description_type` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descriptions`
--

LOCK TABLES `descriptions` WRITE;
/*!40000 ALTER TABLE `descriptions` DISABLE KEYS */;
INSERT INTO `descriptions` VALUES (1,'ET',1,2,'<p><strong>ET</strong> est une conjonction de coordination utilisée pour relier des éléments équivalents dans une phrase. <em>Exemple :</em> pommes <strong>ET</strong> poires. <strong>Astuce :</strong> Remplacez par \'ET PUIS\' pour tester son utilisation.</p>'),(2,'EST',1,1,'<p><strong>EST</strong> est une forme du verbe \'être\' à la troisième personne du singulier. <em>Exemple :</em> Il <strong>EST</strong> tard. <strong>Astuce :</strong> Remplacez par \'ÉTAIT\' pour tester son utilisation. <em>Utilisé pour décrire un état ou une caractéristique.</em></p>');
/*!40000 ALTER TABLE `descriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dictations`
--

DROP TABLE IF EXISTS `dictations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dictations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` text,
  `level` int DEFAULT NULL,
  `audioURL` varchar(255) DEFAULT NULL,
  `audioName` varchar(255) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dictations`
--

LOCK TABLES `dictations` WRITE;
/*!40000 ALTER TABLE `dictations` DISABLE KEYS */;
INSERT INTO `dictations` VALUES (1,'Le matin, le soleil brille et les oiseaux chantent. Les chats dans le jardin jouent avec les feuilles qui tombent.',1,'/audios/dictee_niveau1_num1.mp3','dictee_niveau1_num1.mp3',NULL),(2,'Sur la route, les voitures passent rapidement. Les enfants regardent les camions et les bus aller et venir.',1,'/audios/dictee_niveau1_num2.mp3','dictee_niveau1_num2.mp3',NULL),(3,'Dans le parc, il y a un grand lac avec des canards. Les gens viennent les nourrir et se promener.',1,'/audios/dictee_niveau1_num3.mp3','dictee_niveau1_num3.mp3',NULL),(4,'Le ciel est bleu et il n\'y a pas de nuages. L\'après-midi, il fait chaud et tout le monde aime jouer dehors.',1,'/audios/dictee_niveau1_num4.mp3','dictee_niveau1_num4.mp3',NULL),(5,'La nuit, la lune brille dans le ciel. Les étoiles scintillent et tout est calme autour.',1,'/audios/dictee_niveau1_num5.mp3','dictee_niveau1_num5.mp3',NULL),(6,' Le ciel est bleu et il n\'y a pas de nuages. L\'après-midi, il fait chaud et tout; le... monde aime: jouer dehors. ',1,'client\\public\\audios\\Le ciel','Le ciel',NULL),(7,'Ce matin, Tom va à la ferme. Il voit des vaches et des moutons. Les poules courent dans la cour. Tom donne du pain aux canards. Il aime écouter le coq chanter. L\'après-midi, il aide à ramasser les œufs. Tom est très content de sa journée à la ferme.',1,'audios\\Un Jour à la Ferme','Un Jour à la Ferme','Un_Jour_à_la_Ferme');
/*!40000 ALTER TABLE `dictations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `helpers`
--

DROP TABLE IF EXISTS `helpers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `helpers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `generateType` enum('AI','user') DEFAULT NULL,
  `numberVote` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helpers`
--

LOCK TABLES `helpers` WRITE;
/*!40000 ALTER TABLE `helpers` DISABLE KEYS */;
INSERT INTO `helpers` VALUES (1,'EST / ET','AI',0);
/*!40000 ALTER TABLE `helpers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `helperswords`
--

DROP TABLE IF EXISTS `helperswords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `helperswords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wordId` int DEFAULT NULL,
  `helperId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_helperword_words` (`wordId`),
  KEY `fk_helperword_helper` (`helperId`),
  CONSTRAINT `fk_helperword_helper` FOREIGN KEY (`helperId`) REFERENCES `helpers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_helperword_words` FOREIGN KEY (`wordId`) REFERENCES `words` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helperswords`
--

LOCK TABLES `helperswords` WRITE;
/*!40000 ALTER TABLE `helperswords` DISABLE KEYS */;
INSERT INTO `helperswords` VALUES (1,1,1),(2,2,1);
/*!40000 ALTER TABLE `helperswords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `idHelper` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_type_helper` (`idHelper`),
  CONSTRAINT `fk_type_helper` FOREIGN KEY (`idHelper`) REFERENCES `helpers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'VERBE',NULL),(2,'CONJONCTION DE COORDINATION',NULL);
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersdictations`
--

DROP TABLE IF EXISTS `usersdictations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersdictations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `dictationId` int DEFAULT NULL,
  `errorCount` int DEFAULT NULL,
  `successRate` decimal(5,2) DEFAULT NULL,
  `attemptDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `dictationId` (`dictationId`),
  CONSTRAINT `usersdictations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `usersdictations_ibfk_2` FOREIGN KEY (`dictationId`) REFERENCES `dictations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersdictations`
--

LOCK TABLES `usersdictations` WRITE;
/*!40000 ALTER TABLE `usersdictations` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersdictations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `words` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words`
--

LOCK TABLES `words` WRITE;
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
INSERT INTO `words` VALUES (1,'EST'),(2,'ET');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-24 18:57:26
