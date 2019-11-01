-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2019 at 12:01 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `befriender`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `friend1` bigint(20) UNSIGNED NOT NULL,
  `friend2` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `friend1`, `friend2`, `created_at`) VALUES
(1, 1, 2, '2019-10-31 07:54:11'),
(2, 2, 1, '2019-10-31 07:57:58'),
(3, 2, 3, '2019-10-31 09:15:07'),
(4, 3, 2, '2019-10-31 15:43:15'),
(5, 2, 4, '2019-10-31 21:37:12'),
(6, 2, 4, '2019-11-01 08:21:10'),
(7, 2, 4, '2019-11-01 08:21:10'),
(8, 2, 4, '2019-11-01 08:21:11'),
(9, 2, 4, '2019-11-01 08:21:11'),
(10, 2, 4, '2019-11-01 08:21:11'),
(11, 2, 4, '2019-11-01 08:21:11'),
(12, 2, 4, '2019-11-01 08:21:11'),
(13, 2, 4, '2019-11-01 08:21:11'),
(14, 2, 4, '2019-11-01 08:21:11'),
(15, 2, 4, '2019-11-01 08:21:12'),
(16, 2, 4, '2019-11-01 08:22:25'),
(17, 2, 4, '2019-11-01 08:22:25'),
(18, 2, 4, '2019-11-01 08:22:25'),
(19, 2, 4, '2019-11-01 08:22:25'),
(20, 2, 4, '2019-11-01 08:22:26'),
(21, 2, 4, '2019-11-01 08:22:26'),
(22, 2, 4, '2019-11-01 08:22:26'),
(23, 2, 4, '2019-11-01 08:22:26'),
(24, 4, 2, '2019-11-01 08:23:58'),
(25, 4, 2, '2019-11-01 08:23:58'),
(26, 4, 2, '2019-11-01 08:23:58'),
(27, 4, 2, '2019-11-01 08:23:58'),
(28, 4, 2, '2019-11-01 08:23:58'),
(29, 4, 2, '2019-11-01 08:23:58'),
(30, 4, 2, '2019-11-01 08:23:59'),
(31, 4, 2, '2019-11-01 08:23:59'),
(32, 4, 2, '2019-11-01 08:23:59'),
(33, 4, 2, '2019-11-01 08:23:59'),
(34, 4, 1, '2019-11-01 08:30:50'),
(35, 4, 1, '2019-11-01 08:34:29'),
(36, 9, 3, '2019-11-01 10:55:21'),
(37, 3, 9, '2019-11-01 10:55:55');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_id` bigint(20) UNSIGNED NOT NULL,
  `to_id` bigint(20) UNSIGNED NOT NULL,
  `type` tinyint(3) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `from_id`, `to_id`, `type`, `message`, `created_at`) VALUES
(1, 1, 2, 0, 'This is my great message', '2019-10-31 12:32:28'),
(2, 2, 1, 0, 'And this is my message!', '2019-10-31 13:17:40'),
(3, 3, 1, 0, 'And this is my weird message!', '2019-10-31 13:25:23'),
(4, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:11'),
(5, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:24'),
(6, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:25'),
(7, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:25'),
(8, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:26'),
(9, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:27'),
(10, 1, 2, 0, 'Victor till Edis!', '2019-10-31 16:06:28'),
(11, 2, 1, 0, 'Right back at you!', '2019-10-31 16:06:43'),
(12, 2, 1, 0, 'Right back at you!', '2019-10-31 16:07:28'),
(13, 2, 1, 0, 'Right back at you!', '2019-10-31 16:07:29'),
(14, 2, 1, 0, 'Right back at you!', '2019-10-31 16:07:30'),
(15, 2, 1, 0, 'Hello!', '2019-10-31 22:10:50'),
(16, 2, 1, 0, 'hello again!', '2019-10-31 22:11:45'),
(17, 2, 1, 0, 'Hi?', '2019-10-31 22:12:17'),
(18, 2, 1, 0, '...', '2019-10-31 22:13:52'),
(19, 2, 1, 0, 'Hello?', '2019-10-31 22:15:14'),
(20, 2, 1, 0, 'Hello', '2019-10-31 22:16:44'),
(21, 2, 1, 0, 'ssdsasdasd', '2019-10-31 22:19:53'),
(22, 2, 1, 0, 'hello', '2019-10-31 22:21:41'),
(23, 2, 1, 0, 'hi?', '2019-10-31 22:24:03'),
(24, 2, 1, 0, 'How are you?', '2019-10-31 22:24:09'),
(25, 2, 1, 0, 'what!', '2019-10-31 22:31:40'),
(26, 2, 1, 0, 'asd', '2019-10-31 22:36:17'),
(27, 2, 1, 0, 'hello?', '2019-10-31 22:39:51'),
(28, 2, 1, 0, 'oh, cool!', '2019-10-31 22:39:55'),
(29, 2, 1, 0, 'this is a real chat now!', '2019-10-31 22:40:00'),
(30, 2, 1, 0, 'haishdaiusdhiaushd', '2019-10-31 22:40:19'),
(31, 2, 1, 0, 'testing', '2019-10-31 22:40:38'),
(32, 2, 1, 0, 'testing again', '2019-10-31 22:40:40'),
(33, 2, 1, 0, 'Hello world', '2019-11-01 07:30:16'),
(34, 2, 1, 0, ':)', '2019-11-01 07:30:21'),
(35, 2, 1, 0, 'jjgf', '2019-11-01 07:32:40'),
(36, 2, 1, 0, 'jhgjg', '2019-11-01 08:18:47'),
(37, 2, 3, 0, 'Hej LMG!', '2019-11-01 08:20:30'),
(38, 1, 2, 0, 'testing', '2019-11-01 10:35:26'),
(39, 3, 9, 0, 'Hello Craig!', '2019-11-01 10:56:04'),
(40, 9, 3, 0, 'Hello Lars-Mikael!', '2019-11-01 10:56:20');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `longitude` double NOT NULL,
  `latitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `description`, `image_url`, `created_at`, `updated_at`, `longitude`, `latitude`) VALUES
(1, 'victor', 'victor@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-10-31 07:48:52', '2019-11-01 11:00:10', 56.877865, 14.807137),
(2, 'edis', 'edis@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-10-31 07:49:01', '2019-11-01 11:00:07', 56.867865, 14.807137),
(3, 'Lars-mikael', 'lmg@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-10-31 09:15:00', '2019-11-01 11:00:04', 56.857865, 14.807137),
(4, 'Simon', 'sr@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-10-31 21:23:38', '2019-11-01 11:01:23', 56.857865, 10.752785),
(5, 'Pär', 'par@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-11-01 07:50:47', '2019-11-01 11:01:21', 56.857865, 10.752785),
(6, 'Alexandra', 'alex@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-11-01 07:50:56', '2019-11-01 11:01:19', 56.857865, 10.752785),
(7, 'Andreas', 'andreas@test.com', 'myPassword', 'A description of me', 'https://thispersondoesnotexist.com/image', '2019-11-01 07:51:03', '2019-11-01 11:01:16', 56.857865, 10.752785),
(8, 'asd', 'asd@test.com', 'pass', ' My description', 'https://thispersondoesnotexist.com/image', '2019-11-01 10:54:02', '2019-11-01 10:54:02', 59.911618, 10.752785),
(9, 'Craig', 'craig@nerd.com', 'hunter2', 'I am Craig, wielder of SSID SWORD!', 'https://thispersondoesnotexist.com/image', '2019-11-01 10:55:02', '2019-11-01 10:55:02', 59.911618, 10.752785);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `friend1_user_fk` (`friend1`),
  ADD KEY `friend2_user_fk` (`friend2`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `from_user_fk` (`from_id`),
  ADD KEY `to_user_fk` (`to_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friend1_user_fk` FOREIGN KEY (`friend1`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `friend2_user_fk` FOREIGN KEY (`friend2`) REFERENCES `user` (`id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `to_user_fk` FOREIGN KEY (`to_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
