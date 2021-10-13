-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2021 at 11:18 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codengine`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(222) NOT NULL,
  `Name` varchar(222) NOT NULL,
  `Email_id` varchar(222) NOT NULL,
  `DepartmentName` varchar(222) NOT NULL,
  `Address` varchar(222) NOT NULL,
  `Roles` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `Name`, `Email_id`, `DepartmentName`, `Address`, `Roles`) VALUES
(1, 'dhiraj', 'dhiraj@gmail.com', 'it', 'nashik', 'softeare developer'),
(2, 'mayur', 'mayur@gmail.com', 'it', 'pune', 'softeare developer'),
(3, 'vishnu', 'vishnu@gmail.com', 'it', 'jaypur', 'softeare developer'),
(4, 'dhiraj', 'dhiraj@gmail.com', 'it', 'nashik', 'softeare developer'),
(5, 'sam', 'sam@gmail.com', 'it', 'dhule', 'developer'),
(6, 'dhiraj', 'dhiraj@gmail.com', 'it', 'nashik', 'softeare developer'),
(7, 'dhiraj', 'dhiraj@gmail.com', 'it', 'nashik', 'softeare developer'),
(8, 'manu', 'amnu@gmail.com', 'it', 'yevla', 'midc');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `Name`, `Email`, `Password`) VALUES
(1, 'dhiraj', 'dhiraj@gmail.com', '354e58f5875d5a70adee43d40a90fb64'),
(3, 'dhiraj ', 'dhiraj1@gmail.com', '354e58f5875d5a70adee43d40a90fb64'),
(5, 'dhiraj thakare ', 'dhiraj9900@gmail.com', '354e58f5875d5a70adee43d40a90fb64'),
(7, 'dhiraj thakare ', 'dhiraj99001@gmail.com', 'ec43f62a9148e17ae4ede193d06f0c52'),
(8, 'vishnu ', 'verma@gmail.com', '354e58f5875d5a70adee43d40a90fb64');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
