-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2021 at 10:28 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smarteduapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_class`
--

CREATE TABLE `all_class` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `pricing` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `all_class`
--

INSERT INTO `all_class` (`class_id`, `class_name`, `category_id`, `description`, `level_id`, `pricing`) VALUES
(3, 'Indonesian war history', 3, 'From the first colonialization until..', 1, 50),
(4, 'Buddhism and Modern Psychology', 5, 'Buddhism and science are deeply..', 2, 0),
(5, 'Financial markets', 2, 'An overview of the ideas, methods...', 3, 10),
(6, 'Corporate Finance', 2, 'Introduction to the fundamentals...', 1, 50),
(7, 'Algorithm specialization', 7, 'Learn to think like a computer...', 1, 50),
(8, 'Business and Financial Modeling', 2, 'Designed to help you make..', 2, 0),
(9, 'Marketing in a Digital World', 7, 'This class examines how digital...', 3, 10),
(10, 'Social Psychology', 5, 'This class offers some answers...', 1, 50),
(11, 'Front-end fundamentals', 7, 'Learn the fundamentals of front end...', 3, 10),
(12, 'HTML for Beginners', 7, 'HTML from scratch', 2, 0),
(13, 'History of Europe', 3, 'The history of Europe concerns itself...', 2, 0),
(14, 'Trigonometry', 4, 'Trigonometry helps us find angles...', 1, 50),
(15, 'Algebra', 4, 'Branch of mathematics dealing with...', 1, 50),
(16, 'Molecular Biology', 6, 'Study the composition, structure...', 1, 50),
(17, 'Banking Finance', 2, 'Explore the dynamic, fast-paced...', 3, 10),
(18, 'Basic Excel', 7, 'Learn Excel from beginner to...', 2, 0),
(19, 'Thermodynamics and Phase Equilibria', 6, 'Learn thermodynamics and and how...', 3, 10),
(20, 'Ancient Egypt and Its Civilization', 3, 'Colossal pyramids, imposing temples...', 3, 10),
(31, 'text', 2, 'texttext text', 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(2, 'finance'),
(3, 'history'),
(4, 'math'),
(5, 'psychology'),
(6, 'science'),
(7, 'software');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `level_id` int(11) NOT NULL,
  `level_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`level_id`, `level_name`) VALUES
(1, 'beginner'),
(2, 'intermediate'),
(3, 'advance');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'student'),
(2, 'teacher');

-- --------------------------------------------------------

--
-- Table structure for table `subcourses`
--

CREATE TABLE `subcourses` (
  `class_id` int(11) NOT NULL,
  `subcourses_id` int(11) NOT NULL,
  `subcourses_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcourses`
--

INSERT INTO `subcourses` (`class_id`, `subcourses_id`, `subcourses_name`) VALUES
(12, 21, ' HTML Essential Training'),
(12, 22, ' CSS Essential Training'),
(11, 23, 'Javascript Essential Training'),
(12, 24, 'Responsive Layout'),
(12, 25, 'Mid-term Exam'),
(11, 26, 'Bootstrap4 Essential Training'),
(11, 27, 'Sass Essential Training'),
(11, 28, 'Learning React.js'),
(11, 29, 'UX for Web Design'),
(12, 30, 'Final-term Exam');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `role_id`) VALUES
(116, 'lioclis', '', '$2b$10$.uSwvU6TfWGQveDYIVHgVuQHYSGz/pW3Ryc4RYmBi99dRB6NB3xDm', 1),
(117, 'levi', 'leviackerman@email.com', '$2b$10$37EhL15jJbQ2Wg17YcPm3eVXu64FLyyHOzr3t3qsy5wzo5252I1/W', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_class`
--

CREATE TABLE `user_class` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_subcourses`
--

CREATE TABLE `user_subcourses` (
  `user_id` int(11) NOT NULL,
  `subcourses_id` int(11) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `score` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_subcourses`
--

INSERT INTO `user_subcourses` (`user_id`, `subcourses_id`, `schedule`, `score`) VALUES
(1, 21, 'you have completed this topic', '89'),
(3, 24, 'friday, 1 june 2021\r\n09:40 - 11:00', 'unfinished'),
(1, 22, '6 November 2021\r\n10:00-12:00', 'unfinished'),
(4, 27, '8 November 2021\r\n09:00-11:00', 'unfinished'),
(3, 24, 'you have completed this topic', '90'),
(3, 28, 'you hve completed this topic', '87');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_class`
--
ALTER TABLE `all_class`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `subcourses`
--
ALTER TABLE `subcourses`
  ADD PRIMARY KEY (`subcourses_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_class`
--
ALTER TABLE `all_class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `subcourses`
--
ALTER TABLE `subcourses`
  MODIFY `subcourses_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
