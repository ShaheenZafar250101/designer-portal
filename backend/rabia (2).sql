-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2023 at 12:47 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rabia`
--

-- --------------------------------------------------------

--
-- Table structure for table `designs`
--

CREATE TABLE `designs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tool` varchar(255) NOT NULL,
  `dated` date NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designs`
--

INSERT INTO `designs` (`id`, `name`, `tool`, `dated`, `image`, `description`, `status`, `file`) VALUES
(34, 'Akif', 'Illustrator', '2023-03-27', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672311757/ptp92xe3tjdb9m2crokw.png', 'left', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672311759/bdh8skwk6f7orhrcyqib.pdf'),
(35, 'Akif', 'Illustrator', '2023-01-12', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741364/j5entigrjdyjlw4wffyv.gif', 'hjgjhghj1', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741377/x5e1oei6ues7olhulddk.pdf'),
(36, 'Akif', 'Illustrator', '2023-01-12', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741385/u5jurennpyfyx1ieiqtt.gif', 'hjgjhghj', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741389/n9jk1ntkcdqprxmkaw2t.pdf'),
(37, 'asasas', 'Photoshop', '2023-10-11', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741597/xwp692nombfx69m2nmkt.png', 'khkj', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741598/kzzjnflnxzhwj1truhfi.pdf'),
(38, 'New', 'Photoshop', '2023-03-14', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672741806/bqwhvbrkiyrermm20l8f.png', 'hjghf', 'In Progress', ''),
(39, 'asasas', 'Photoshop', '2023-02-22', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672763552/xltuhgnag2nrfbranmh9.png', 'new', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672763553/czqbnvpcgtb7vwahfrks.pdf'),
(40, 'Check', 'Photoshop', '2023-01-12', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672767838/zk2rjobqujhq1wmyn6cl.png', 'check1', 'In Progress', 'http://res.cloudinary.com/dnx306zvi/image/upload/v1672767839/cpantvwgqsksrflnbvfg.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `token`) VALUES
(1, 'akif@gmail.com', '250101', 'skieruc8598vfhfv7fbcer8rerfn8'),
(2, 'akifjavaid@gmail.com', '111111', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `designs`
--
ALTER TABLE `designs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `designs`
--
ALTER TABLE `designs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
