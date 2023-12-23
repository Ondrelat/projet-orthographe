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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dictations`
--

LOCK TABLES `dictations` WRITE;
/*!40000 ALTER TABLE `dictations` DISABLE KEYS */;
INSERT INTO `dictations` VALUES (1,'Le matin, le soleil brille et les oiseaux chantent. Les chats dans le jardin jouent avec les feuilles qui tombent.',1,'/audios/dictee_niveau1_num1.mp3','dictee_niveau1_num1.mp3'),(2,'Sur la route, les voitures passent rapidement. Les enfants regardent les camions et les bus aller et venir.',1,'/audios/dictee_niveau1_num2.mp3','dictee_niveau1_num2.mp3'),(3,'Dans le parc, il y a un grand lac avec des canards. Les gens viennent les nourrir et se promener.',1,'/audios/dictee_niveau1_num3.mp3','dictee_niveau1_num3.mp3'),(4,'Le ciel est bleu et il n\'y a pas de nuages. L\'après-midi, il fait chaud et tout le monde aime jouer dehors.',1,'/audios/dictee_niveau1_num4.mp3','dictee_niveau1_num4.mp3'),(5,'La nuit, la lune brille dans le ciel. Les étoiles scintillent et tout est calme autour.',1,'/audios/dictee_niveau1_num5.mp3','dictee_niveau1_num5.mp3');
/*!40000 ALTER TABLE `dictations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-21 18:17:27
