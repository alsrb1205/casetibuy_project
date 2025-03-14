-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: casetibuy
-- ------------------------------------------------------
-- Server version	8.4.4

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
-- Table structure for table `casetibuy_order_detail`
--

DROP TABLE IF EXISTS `casetibuy_order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casetibuy_order_detail` (
  `order_detail_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `qty` int NOT NULL,
  `unit_price` int NOT NULL,
  `color` varchar(30) NOT NULL,
  `case_type` varchar(30) NOT NULL,
  `product_image` varchar(200) DEFAULT NULL,
  `kinds` varchar(30) NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  KEY `fk_order` (`order_id`),
  KEY `fk_product` (`product_id`),
  CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `casetibuy_order` (`order_id`),
  CONSTRAINT `fk_product` FOREIGN KEY (`product_id`) REFERENCES `casetibuy_product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casetibuy_order_detail`
--

LOCK TABLES `casetibuy_order_detail` WRITE;
/*!40000 ALTER TABLE `casetibuy_order_detail` DISABLE KEYS */;
INSERT INTO `casetibuy_order_detail` VALUES (1,13,3,'test3',1,122000,'black','맥세이프 호환 임팩트 링 스탠드 케이스','http://localhost:9000/upload_files\\1740722063233_34623202iphone16p_cross_heritage_case_ring_color_black1.webp',''),(2,14,3,'test3',1,122000,'skyblue','맥세이프 호환 임팩트 링 스탠드 케이스','http://localhost:9000/upload_files\\1740722063234_898830465iphone16p_cross_heritage_case_ring_color_skyblue1.webp',''),(3,23,3,'test3',1,93000,'black','임팩트 케이스','http://localhost:9000/upload_files\\1740722063230_777853255iphone16p_cross_heritage_case_impact_color_black1.webp','iphone'),(4,23,3,'test3',3,101000,'black','맥세이프 호환 미러 케이스','http://localhost:9000/upload_files\\1740722063233_28306271iphone16p_cross_heritage_case_mirror_color_black1.webp','iphone'),(5,23,3,'test3',1,93000,'black','임팩트 케이스','http://localhost:9000/upload_files\\1740722063230_777853255iphone16p_cross_heritage_case_impact_color_black1.webp','iphone'),(6,23,3,'test3',1,122000,'black','맥세이프 호환 임팩트 링 스탠드 케이스','http://localhost:9000/upload_files\\1740722063233_34623202iphone16p_cross_heritage_case_ring_color_black1.webp','iphone'),(7,24,2,'test2',1,101000,'skyblue','맥세이프 호환 임팩트 케이스','http://localhost:9000/upload_files\\1740717746284_556216946iphone16p_label_sticker_design_case_mimpact_color_skyblue1.webp','iphone'),(8,25,7,'Cinderella\'s 75th Anniversary Case',1,101000,'black','맥세이프 호환 미러 케이스','http://localhost:9000/upload_files\\1741874835537_504301278iphone16p_cinderella_case_mirror_color_black1.webp','iphone'),(9,26,8,'Tom Character Case',1,115000,'black','바운스 케이스','http://localhost:9000/upload_files\\1741874894681_597589030iphone16p_tom_and_jerry_case_bounce_color_black1.webp','iphone'),(10,26,8,'Tom Character Case',1,122000,'black','맥세이프 호환 임팩트 링 스탠드 케이스','http://localhost:9000/upload_files\\1741874894693_781069557iphone16p_tom_and_jerry_case_ring_color_black1.webp','iphone'),(11,26,8,'Tom Character Case',1,101000,'black','맥세이프 호환 임팩트 케이스','http://localhost:9000/upload_files\\1741874894688_653650251iphone16p_tom_and_jerry_case_mimpact_color_black1.webp','iphone'),(12,26,8,'Tom Character Case',1,101000,'black','맥세이프 호환 미러 케이스','http://localhost:9000/upload_files\\1741874894689_362707682iphone16p_tom_and_jerry_case_mirror_color_black1.webp','iphone'),(13,26,8,'Tom Character Case',1,93000,'black','임팩트 케이스','http://localhost:9000/upload_files\\1741874894687_766892615iphone16p_tom_and_jerry_case_impact_color_black1.webp','iphone'),(14,26,12,'Hello Kitty Sticker Case',1,115000,'black','바운스 케이스','http://localhost:9000/upload_files\\1741875195473_524259631iphone16p_hello_kitty_case_bounce_color_black1.webp','iphone'),(15,26,12,'Hello Kitty Sticker Case',1,122000,'black','맥세이프 호환 임팩트 링 스탠드 케이스','http://localhost:9000/upload_files\\1741875195497_819813599iphone16p_hello_kitty_case_ring_color_black1.webp','iphone'),(16,26,12,'Hello Kitty Sticker Case',1,101000,'black','맥세이프 호환 임팩트 케이스','http://localhost:9000/upload_files\\1741875195484_680270756iphone16p_hello_kitty_case_mimpact_color_black1.webp','iphone'),(17,26,12,'Hello Kitty Sticker Case',1,101000,'black','맥세이프 호환 미러 케이스','http://localhost:9000/upload_files\\1741875195491_36276594iphone16p_hello_kitty_case_mirror_color_black1.webp','iphone'),(18,26,12,'Hello Kitty Sticker Case',1,93000,'black','임팩트 케이스','http://localhost:9000/upload_files\\1741875195480_81631139iphone16p_hello_kitty_case_impact_color_black1.webp','iphone');
/*!40000 ALTER TABLE `casetibuy_order_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-14 18:15:02
