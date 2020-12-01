-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bple_gaming
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Almacenamiento'),(2,'Memorias'),(3,'Teclados'),(4,'Gabinetes'),(5,'Auriculares y Microfonos'),(6,'Fuentes'),(7,'Motherboards'),(8,'Placas de Video'),(9,'Parlantes'),(10,'Mouse Pad'),(11,'Mouses'),(12,'Refrigeración'),(13,'Microprocesador'),(14,'Monitores'),(15,'Equipos'),(16,'Combos'),(17,'Joysticks'),(18,'Notebooks'),(19,'Consolas'),(20,'Sillas gamer');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers` DISABLE KEYS */;
INSERT INTO `managers` VALUES (NULL,NULL,1,'brian@brian.com',1);
/*!40000 ALTER TABLE `managers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('2020-11-18 22:18:53','2020-11-28 22:18:53',18,'Intel core i9 9900k',30200.00,'8 Cores\r\n16 Threads\r\nMax Turbo Frequency 5.00 GHz ','images-1606601933551.jpg',1,NULL,'on',13,1),('2020-11-18 22:27:35','2020-11-28 22:35:52',19,'EVGA GeForce 2070 Super ',63000.00,'8GB GDDR6\r\nPCI-Express 3.0','image-1606602952883.jpg',1,NULL,'on',8,1),('2020-11-18 22:54:29','2020-11-28 22:54:29',20,'Gigabyte z390 gaming ',12300.00,'Chipset: Intel Z390 Express Chipset\r\nSocket: 1151\r\nDDR4','images-1606604068962.jpg',1,NULL,'on',7,1),('2020-11-18 22:58:40','2020-11-28 22:58:40',21,'HyperX Predator',5200.00,'Capacidad: 8 GB\r\nVelocidad: 3200 Mhz\r\nTipo: DDR4','images-1606604319966.jpg',1,NULL,'on',2,1),('2020-11-18 23:00:35','2020-11-28 23:00:35',22,'Intel core i3 10100',20500.00,'Max Turbo Frequency 4.30 GHz\r\n4 Cores','images-1606604435299.jpg',1,NULL,'on',13,1),('2020-11-18 23:04:38','2020-11-28 23:06:51',23,'Samsung S22F350FH   ',19000.00,'Tamaño: 21.5\"\r\nTiene una resolución de 1920px-1080px\r\nTipos de conexión: HDMI, VGA, D-Sub','image-1606604811187.jpg',1,NULL,'on',14,1),('2020-11-18 23:08:47','2020-11-28 23:08:47',24,'HyperX Alloy',10700.00,' Es resistente a salpicaduras.\r\n Tipo de conector: USB 2.0.','images-1606604927818.jpg',1,NULL,'on',3,1),('2020-11-18 23:10:41','2020-11-28 23:10:41',25,'Logitech g203',6000.00,' Sensor óptico.\r\n Resolución: 8000dpi. \r\n Cuenta con 6 botones.','images-1606605041696.jpg',1,NULL,'on',11,1),('2020-11-18 23:13:08','2020-11-28 23:13:08',26,'EVGA Supernova',25000.00,' Formato: ATX.\r\n Watts: 850 W.','images-1606605188955.jpg',1,NULL,'on',6,1),('2020-11-18 23:16:13','2020-11-28 23:16:13',27,'Lenovo s340',123000.00,' Tamaño de pantalla: 15.6.\r\n Procesador: Ryzen 5.\r\n Ram: 8 GB.\r\n Almacenamiento: 1TB.\r\nSistema Operativo: Win 10.','images-1606605372943.jpg',1,NULL,'on',18,1),('2020-11-18 23:17:33','2020-11-28 23:17:33',28,'Xbox one S',50000.00,' Color: Blanco.\r\n Almacenamiento: 500gb. \r\n Joysticks: 1.','images-1606605453131.jpg',1,NULL,'on',19,1),('2020-11-18 23:19:29','2020-11-28 23:19:29',29,'MSI b450',15000.00,'Socket: AM4. \r\nPlataforma: AMD.\r\nSlots: 4xDDR4.','images-1606605569840.jpg',1,NULL,'on',7,1),('2020-11-18 23:21:36','2020-11-28 23:22:30',30,'AMD Ryzen 7 1600 ',30000.00,'6 Cores.\r\nFrecuencia Turbo: 3800 Ghz.\r\nSocket: AM4.','image-1606605750156.jpg',1,NULL,NULL,13,1),('2020-11-18 23:25:20','2020-11-28 23:25:20',31,'Asus Zenbook',185000.00,'Procesador: i7 8565u.\r\nMemoria: 16GB.\r\nAlmacenamiento: 512GB ssd.','images-1606605920221.jpg',1,NULL,NULL,18,1),('2020-11-18 23:27:23','2020-11-28 23:27:23',32,'PowerColor Radeon RX 5700 XT',85000.00,' 8 GB DDR6','images-1606606043796.jpg',1,NULL,NULL,8,1),('2020-11-18 23:29:59','2020-11-28 23:31:22',33,'HyperX Cloud Revolver',25000.00,'Sonido envolvente.\r\nDolby® Surround 7.1 audio technology.','image-1606606282321.jpg',1,NULL,NULL,5,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2020-11-28 19:22:24','2020-11-30 20:45:01',1,'Brian','Rolón','user','brian@brian.com','$2b$10$VOtjQahrOT5jVRUKsl2g9u5vaa9uZDiFJruJbAiX62NAcWZQrekim','','','',1234567890,'','','','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30 18:08:50
