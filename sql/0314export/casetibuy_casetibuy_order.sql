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
-- Table structure for table `casetibuy_order`
--

DROP TABLE IF EXISTS `casetibuy_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casetibuy_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `member_id` varchar(20) NOT NULL,
  `total_price` int NOT NULL,
  `payment_method` enum('creditCard','kakaoPay') NOT NULL,
  `order_status` enum('pending','completed','canceled') DEFAULT 'pending',
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `zipcode` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `detail_address` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_member` (`member_id`),
  CONSTRAINT `fk_order_member` FOREIGN KEY (`member_id`) REFERENCES `casetibuy_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casetibuy_order`
--

LOCK TABLES `casetibuy_order` WRITE;
/*!40000 ALTER TABLE `casetibuy_order` DISABLE KEYS */;
INSERT INTO `casetibuy_order` VALUES (1,'test123',115000,'kakaoPay','pending','2025-03-12 18:37:03','34672','대전 동구 판교1길 3 (판암동)','1212121'),(2,'test123',58000,'creditCard','pending','2025-03-12 18:38:05','46031','부산 기장군 장안읍 판곡길 2 (오리)','12'),(3,'test123',417000,'creditCard','pending','2025-03-13 10:13:50','48060','부산 해운대구 APEC로 17 (우동, 센텀리더스마크)','1212321213'),(4,'test123',116000,'kakaoPay','pending','2025-03-13 10:28:26','06035','서울 강남구 가로수길 5 (신사동)','213123'),(5,'test123',116000,'kakaoPay','pending','2025-03-13 10:28:26','06035','서울 강남구 가로수길 5 (신사동)','213123'),(6,'test123',295000,'creditCard','pending','2025-03-13 12:15:54','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','12321321123'),(7,'test123',101000,'creditCard','pending','2025-03-13 14:20:15','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','123123'),(8,'test123',447000,'creditCard','pending','2025-03-13 15:30:13','13479','경기 성남시 분당구 서판교로 32 (판교동)','123213'),(9,'test123',317000,'creditCard','pending','2025-03-13 15:45:12','06035','서울 강남구 가로수길 9 (신사동)','12123123'),(10,'test123',244000,'creditCard','pending','2025-03-13 16:57:21','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','123123'),(11,'test123',122000,'creditCard','pending','2025-03-13 18:26:27','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','ㅁㄴㅇㅁㄴㅇㅁㄴ'),(12,'test123',93000,'creditCard','pending','2025-03-13 21:48:58','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','23123123'),(13,'test123',122000,'creditCard','pending','2025-03-14 10:58:27','06035','서울 강남구 가로수길 5 (신사동)','1231231'),(14,'test123',122000,'creditCard','pending','2025-03-14 13:46:52','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','123213'),(23,'test123',611000,'creditCard','pending','2025-03-14 15:01:51','13480','경기 성남시 분당구 대왕판교로 477 (판교동, 낙생고등학교)','12321321'),(24,'test123',101000,'creditCard','pending','2025-03-14 15:02:26','06035','서울 강남구 가로수길 5 (신사동)','123213'),(25,'test123',101000,'creditCard','pending','2025-03-14 15:03:44','06035','서울 강남구 가로수길 5 (신사동)','14'),(26,'test123',1064000,'creditCard','pending','2025-03-14 18:01:56','06035','서울 강남구 가로수길 5 (신사동)','123213213');
/*!40000 ALTER TABLE `casetibuy_order` ENABLE KEYS */;
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
