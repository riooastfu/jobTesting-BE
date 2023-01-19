-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 01:06 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `dt_pegawai`
--

CREATE TABLE `dt_pegawai` (
  `id` int(11) NOT NULL,
  `tempat_lahir` varchar(255) DEFAULT NULL,
  `tgl_lahir` varchar(255) DEFAULT NULL,
  `departemen` varchar(255) DEFAULT NULL,
  `pt` varchar(255) DEFAULT NULL,
  `lokasi_kerja` varchar(255) DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dt_pegawai`
--

INSERT INTO `dt_pegawai` (`id`, `tempat_lahir`, `tgl_lahir`, `departemen`, `pt`, `lokasi_kerja`, `nik`, `createdAt`, `updatedAt`) VALUES
(3, 'Jakarta Update', '1999-05-02', 'IT Update 1', 'PT. X', 'Jakarta', '1207210208000001', '2023-01-18 13:57:41', '2023-01-18 23:07:39'),
(7, 'Binjai', '2000-07-18', 'Svnmb', 'Dfgh', 'Dghh', '225446632', '2023-01-18 23:44:45', '2023-01-18 23:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `nik` varchar(255) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`nik`, `nama`, `createdAt`, `updatedAt`) VALUES
('1207210208000001', 'Hapsah Update 4 Kali', '2023-01-18 13:57:41', '2023-01-18 23:07:39'),
('225446632', 'Dafgj', '2023-01-18 23:44:45', '2023-01-18 23:44:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dt_pegawai`
--
ALTER TABLE `dt_pegawai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nik` (`nik`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`nik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dt_pegawai`
--
ALTER TABLE `dt_pegawai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dt_pegawai`
--
ALTER TABLE `dt_pegawai`
  ADD CONSTRAINT `dt_pegawai_ibfk_1` FOREIGN KEY (`nik`) REFERENCES `pegawai` (`nik`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
