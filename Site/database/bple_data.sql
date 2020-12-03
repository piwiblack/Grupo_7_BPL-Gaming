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
INSERT INTO `categories` VALUES (1,'Almacenamiento'),(2,'Memorias'),(3,'Motherboards'),(4,'Placas de video'),(5,'Audio'),(6,'Fuentes'),(7,'Consolas'),(8,'Monitores'),(9,'Notebooks'),(10,'PC armadas'),(11,'Joysticks'),(12,'Mouses'),(13,'Teclados'),(14,'Procesadores');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('2020-12-03 14:50:17','2020-12-03 14:50:17',46,'Intel core i9 9900k',30200.00,'8 Cores \r\n16 Threads Max \r\nTurbo Frequency 5.00 GHz','images-1607007017375.jpg',1,NULL,'on',14),('2020-12-03 14:51:28','2020-12-03 14:51:28',47,'EVGA GeForce 2070 Super',63000.00,'8GB GDDR6  \r\nPCI-Express 3.0','images-1607007088682.jpg',4,NULL,'on',4),('2020-12-03 14:53:58','2020-12-03 14:53:58',48,'Gigabyte z390 gaming ',12300.00,'diseño de PWM digital 10 + 2, CrossFire ™ de 2 vías, USB 3.1 Gen2 tipo A, protector térmico M.2, LAN Intel GbE con cFosSpeed, Smart Fan 5, Dual M.2','images-1607007238720.jpg',1,NULL,'on',3),('2020-12-03 14:57:15','2020-12-03 14:57:15',49,'HyperX Predator',5200.00,' Capacidad: 8 GB.  \r\n Velocidad: 3000 Mhz.\r\n Tipo: DDR4.','images-1607007435030.jpg',1,NULL,'on',2),('2020-12-03 14:58:32','2020-12-03 14:58:32',50,'Intel core i3 10100',20500.00,'Max Turbo Frequency 4.30 GHz \r\n4 Cores','images-1607007512274.jpg',1,NULL,'on',14),('2020-12-03 15:00:21','2020-12-03 15:00:21',51,'Samsung S22F350FH',19000.00,'Tamaño: 21.5\". \r\nTiene una resolución de 1920px-1080px\r\nTipos de conexión: HDMI, VGA, D-Sub ','images-1607007621381.jpg',1,NULL,'on',8),('2020-12-03 15:01:53','2020-12-03 15:01:53',52,'HyperX Alloy',10700.00,'Es resistente a salpicaduras\r\nTipo de conector: USB 2.0.','images-1607007713048.jpg',1,NULL,'on',13),('2020-12-03 15:05:13','2020-12-03 15:05:13',53,'Logitech g203',6000.00,'Sensor óptico.\r\nResolución: 8000dpi.\r\nCuenta con 6 botones.','images-1607007913039.jpg',2,NULL,'on',12),('2020-12-03 15:06:40','2020-12-03 15:06:40',54,'EVGA Supernova',25000.00,'Formato: ATX. \r\nWatts: 850 W.','images-1607008000722.jpg',3,NULL,'on',6),('2020-12-03 15:09:19','2020-12-03 15:09:19',55,'PC Gamer ',123000.00,'Procesador: AMD Ryzen 5.\r\nVideo: GeForce RTX 2050.\r\nRam: 16 GB.','images-1607008159159.jpg',6,NULL,'on',10),('2020-12-03 15:12:01','2020-12-03 15:12:01',56,'HyperX Cloud Revolver',20000.00,'Sonido envolvente.\r\nDolby® Surround 7.1 audio technology','images-1607008321066.jpg',3,NULL,'on',5),('2020-12-03 15:13:18','2020-12-03 15:13:38',57,'Lenovo s340 ',105000.00,'Tamaño de pantalla: 15.6.\r\nProcesador: Ryzen 5.\r\nRam: 8 GB.\r\nAlmacenamiento: 1TB.\r\nSistema Operativo: Win 10.','images-1607008398605.jpg',6,NULL,'on',9),('2020-12-03 15:18:22','2020-12-03 15:18:22',59,'Xbox One S',50000.00,'Color: Blanco. \r\nAlmacenamiento: 500gb.\r\nJoysticks: 1. ','images-1607008702616.jpg',6,NULL,NULL,7),('2020-12-03 15:20:38','2020-12-03 15:20:38',61,'Joystick Novpeak',3000.00,'Compatible con pc y ps4','images-1607008838474.jpg',1,NULL,NULL,11),('2020-12-03 15:22:25','2020-12-03 15:22:25',62,'Intel core i5 9400f',24500.00,'Max Turbo Frequency 4.60 GHz.\r\n4 Cores.','images-1607008943903.jpg',1,NULL,NULL,14),('2020-12-03 15:25:52','2020-12-03 15:42:14',63,'HP VH240a ',18000.00,' 23.8 Pulgadas.\r\n FHD 1080p','image-1607010134121.jpg',0,NULL,NULL,8),('2020-12-03 15:27:03','2020-12-03 15:27:03',64,'MSI b450',15000.00,' Socket: AM4.\r\n Plataforma: AMD. \r\n Slots: 4xDDR4.','images-1607009223881.jpg',6,NULL,NULL,3),('2020-12-03 15:29:03','2020-12-03 15:29:03',65,'Asus Zenbook',180000.00,' i7 8565u.\r\n 16GB Ram. \r\n 512GB ssd.','images-1607009343452.jpg',12,NULL,NULL,9),('2020-12-03 15:31:03','2020-12-03 15:31:03',66,'PowerColor Radeon RX 5700 XT',50000.00,' Capacidad: 8 GB.\r\n Tipo: DDR6','images-1607009463904.jpg',6,NULL,NULL,4),('2020-12-03 15:33:02','2020-12-03 15:33:02',67,'Corsair Vengeance Pro',11000.00,' RGB.\r\n Velocidad-2133 MHz','images-1607009582877.jpg',6,NULL,NULL,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2020-12-03 14:44:32','2020-12-03 14:44:32',11,'Brian','Rolón','admin','bple@bple.com','$2b$10$/VnDY2xOLsiIvXdOcLF1IO1RwJxhT2fUCbNgXmNRF6NIShlDwLZeS',NULL,NULL,NULL,1234567890,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2020-12-03 13:02:16
