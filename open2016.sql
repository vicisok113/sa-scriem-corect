-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2016 at 08:59 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `open2016`
--

-- --------------------------------------------------------

--
-- Table structure for table `elevi`
--

CREATE TABLE `elevi` (
  `id` int(11) NOT NULL,
  `prof_id` int(11) NOT NULL,
  `nume` text NOT NULL,
  `nivel` int(11) NOT NULL,
  `scor1` float NOT NULL,
  `scor2` float NOT NULL,
  `scor3` float NOT NULL,
  `scor4` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `elevi`
--

INSERT INTO `elevi` (`id`, `prof_id`, `nume`, `nivel`, `scor1`, `scor2`, `scor3`, `scor4`) VALUES
(1, 1, 'Victor Tudosă', 1, 4, 5.65, 0, 10),
(3, 1, 'Vultur David', 0, 0, 0, 0, 0),
(6, 1, 'Asdf test', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `profesori`
--

CREATE TABLE `profesori` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `parola` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profesori`
--

INSERT INTO `profesori` (`id`, `email`, `parola`) VALUES
(1, 'test@mail.com', '$2y$10$NerFLfm/rFP9153qwywLeuTN6TwuZd4Ko0H4jBCa4Bf9SNZGYZIOy'),
(2, 'mail@mail.com', '$2y$10$ITvNv/acwylylSXAhLSVGO0SaybiVUMDQEYpdjg7DCYbVPl14J8O6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `elevi`
--
ALTER TABLE `elevi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesori`
--
ALTER TABLE `profesori`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `elevi`
--
ALTER TABLE `elevi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `profesori`
--
ALTER TABLE `profesori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
