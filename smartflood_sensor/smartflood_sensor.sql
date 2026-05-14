-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2026 at 06:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartflood_sensor`
--

-- --------------------------------------------------------

--
-- Table structure for table `monitoring`
--

CREATE TABLE `monitoring` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `lokasi_sungai` varchar(100) NOT NULL,
  `waktu_pengukuran` datetime NOT NULL,
  `tinggi_air` int(11) NOT NULL,
  `status_banjir` varchar(20) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `foto_bukti` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `monitoring`
--

INSERT INTO `monitoring` (`id`, `user_id`, `lokasi_sungai`, `waktu_pengukuran`, `tinggi_air`, `status_banjir`, `deskripsi`, `foto_bukti`) VALUES
(1, 1, 'Bojongsoang', '2026-05-05 00:30:51', 100, 'Waspada', 'banjir bangetttt', '1777915851_PetaDayeuhkolot.jpg'),
(3, 1, 'Dayeuhkolot', '2026-05-13 20:58:10', 200, 'Bahaya', 'banjirr bangett nihh', '1778680690_Fenomena Banjir di Jakarta – Kompaspedia.jpeg'),
(4, 1, 'Gedebage', '2026-05-13 21:06:26', 75, 'Waspada', '6 desa terdampak banjir', '1778681186_Guwahati News_ पूर्वोत्तर के राज्यों में भीषण….jpeg'),
(5, 1, 'Ujungberung', '2026-05-13 21:08:20', 45, 'Aman', 'banjir menghambat lalulintas dan menyebankan kendaraan mogok', '1778681300_BPBD DKI Jakarta Keluarkan Peringatan Hujan Ekstrem Hingga 24 Januari.jpeg'),
(6, 1, 'Rancaekek', '2026-05-13 21:12:12', 40, 'Aman', 'kecamatan rancaekek terdampak banjir akibat hujan deras', '1778681532_Flood in Bekasi, indonesia.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`) VALUES
(1, 'Felda', 'feldamufarihati250@gmail.com', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `monitoring`
--
ALTER TABLE `monitoring`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `monitoring`
--
ALTER TABLE `monitoring`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `monitoring`
--
ALTER TABLE `monitoring`
  ADD CONSTRAINT `monitoring_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
