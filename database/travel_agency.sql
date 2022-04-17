-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4306
-- Generation Time: Apr 17, 2022 at 04:37 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travel_agency`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `flight_id` int(11) NOT NULL,
  `departure_time` datetime NOT NULL,
  `arrival_time` datetime NOT NULL,
  `departure_location` varchar(255) NOT NULL,
  `arrival_location` varchar(255) NOT NULL,
  `airline` varchar(255) NOT NULL,
  `tickets_left` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `type_of_flight` varchar(255) NOT NULL,
  `stops` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`flight_id`, `departure_time`, `arrival_time`, `departure_location`, `arrival_location`, `airline`, `tickets_left`, `price`, `type_of_flight`, `stops`) VALUES
(1, '2022-04-18 01:22:20', '2022-04-22 01:21:01', 'depLocation1', 'arrLocation1', 'airline1', 15, 275, 'flightType1', 0),
(2, '2022-04-18 01:22:20', '2022-04-22 01:21:01', 'depLocation2', 'arrLocation2', 'airline2', 14, 276, 'flightType2', 3),
(3, '2022-04-07 11:24:50', '2022-04-08 15:32:45', 'Prishtina', 'Istanbul', 'Turkish Airlines', 4, 312, 'Two way', 0),
(4, '2022-04-07 11:24:50', '2022-04-08 15:32:45', 'Prishtina', 'Istanbul', 'Turkish Airlines', 4, 312, 'Two way', 2);

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `hotel_id` int(11) NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  `hotel_location` varchar(255) NOT NULL,
  `description_title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `rating` decimal(10,0) NOT NULL,
  `reviews` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`hotel_id`, `hotel_name`, `hotel_location`, `description_title`, `description`, `rating`, `reviews`, `price`) VALUES
(1, 'name1', 'location1', 'descTitle1', 'desc1', '3', 15, 221),
(2, 'name2', 'location2', 'descTitle2', 'desc2', '4', 13, 254);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `users_id` int(11) NOT NULL,
  `users_uid` tinytext NOT NULL,
  `users_pwd` longtext NOT NULL,
  `users_email` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`users_id`, `users_uid`, `users_pwd`, `users_email`) VALUES
(1, 'test', '$2y$10$Q3dN3UgnSydg.Uu85q3IouVPLtBInCy7x1Sro5uikb8KBeX/3sgvq', 'test@hotmail.com'),
(2, 'test1', '$2y$10$TzgxkmqbCdQrIh36RRQZjOy/WJxi4oK6Y0E5sWf6gE0qSNZ5YHctG', 'test@hotmai.com'),
(3, 'test12', '$2y$10$RcVErg8lXa5MRLxFPCiRpu0JNs6z20oKSH6/N2Niyap6zyJq3PkrW', 'test12@hotmail.com'),
(4, 'test321', '$2y$10$kQJ6oOjSbMSpxOi7afvDDeqa2cUvKwO2eLgRorEbBKWNP.Xe4Qp2y', 'test321@hotmail.com'),
(5, 'testest', '$2y$10$CiBLxgjfzY5tcPPUVnQDq.uL0YLRjEEYodiSyIBft4xHHclduU3zi', 'testest@hotmail.com'),
(6, 'tata', '$2y$10$GjMUU.ouj4BahlxiYA5DtOb97PKJsc1/DxiYs3VJnUeWqaBQ9AzH2', 'tata@hotmail.com'),
(7, 'edonmorina', '$2y$10$HT/6bldPrQDTI4L/CwmB7.Xykb7SyUht/dGR7EX9ppVPwVWHAUzE6', 'edonmorinaaa@hotmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`flight_id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`hotel_id`),
  ADD UNIQUE KEY `hotel_name` (`hotel_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `hotel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
