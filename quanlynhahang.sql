-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th4 30, 2020 lúc 02:25 PM
-- Phiên bản máy phục vụ: 5.7.26
-- Phiên bản PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlynhahang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ban`
--

DROP TABLE IF EXISTS `ban`;
CREATE TABLE IF NOT EXISTS `ban` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `status` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ban`
--

INSERT INTO `ban` (`id`, `name`, `status`) VALUES
(1, 'Bàn 1', 'Trống'),
(2, 'Bàn 2', 'Trống'),
(3, 'Bàn 3', 'Trống'),
(4, 'Bàn 4', 'Trống'),
(5, 'Bàn 5', 'Trống'),
(6, 'Bàn 6', 'Trống'),
(7, 'Bàn 7', 'Trống'),
(8, 'Bàn 8', 'Trống'),
(9, 'Bàn 9', 'Trống');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bep`
--

DROP TABLE IF EXISTS `bep`;
CREATE TABLE IF NOT EXISTS `bep` (
  `id` int(11) NOT NULL,
  `hoadon_id` int(11) NOT NULL,
  `status` bit(1) NOT NULL,
  PRIMARY KEY (`id`,`hoadon_id`),
  KEY `bep_ibfk_1` (`hoadon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chucvu`
--

DROP TABLE IF EXISTS `chucvu`;
CREATE TABLE IF NOT EXISTS `chucvu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chucvu`
--

INSERT INTO `chucvu` (`id`, `name`, `description`) VALUES
(1, 'Phục vụ', NULL),
(2, 'Thu ngân', NULL),
(3, 'Bếp', NULL),
(4, 'ADMIN', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE IF NOT EXISTS `hoadon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `date` date DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `tax` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `khachhang_id` int(11) DEFAULT NULL,
  `ban_id` int(11) NOT NULL,
  `nhanvien_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `HOADON_NO_UNIQUE` (`no`),
  KEY `fk_HOADON_KHACHHANG1_idx` (`khachhang_id`),
  KEY `fk_HOADON_BAN1_idx` (`ban_id`),
  KEY `fk_HOADON_NHANVIEN1_idx` (`nhanvien_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`id`, `no`, `date`, `status`, `tax`, `khachhang_id`, `ban_id`, `nhanvien_id`) VALUES
(13, 'HD001', '2019-04-04', b'1', NULL, 1, 1, 1),
(14, 'HD002', '2019-04-04', b'1', NULL, 1, 2, 1),
(18, 'HD0018', '2019-08-26', b'1', NULL, 1, 3, 1),
(19, 'HD0019', '2019-08-26', b'1', NULL, 1, 1, 1),
(20, 'HD0020', '2019-09-04', b'1', NULL, 1, 3, 1),
(21, 'HD0021', '2019-09-04', b'1', NULL, 1, 3, 1),
(22, 'HD0022', '2019-09-04', b'1', NULL, 1, 2, 1),
(23, 'HD0023', '2019-09-04', b'1', NULL, 1, 5, 1),
(24, 'HD0024', '2019-09-04', b'1', NULL, 1, 7, 1),
(25, 'HD0025', '2019-09-04', b'1', NULL, 1, 2, 1),
(26, 'HD0026', '2019-09-04', b'1', NULL, 1, 9, 1),
(27, 'HD0027', '2019-09-04', b'1', NULL, 1, 7, 1),
(28, 'HD0028', '2019-09-05', b'1', NULL, 1, 3, 1),
(29, 'HD0029', '2019-09-05', b'1', NULL, 1, 8, 1),
(31, 'HD0030', '2019-09-05', b'1', NULL, 1, 3, 1),
(32, 'HD0032', '2019-09-05', b'1', NULL, 1, 5, 1),
(33, 'HD0033', '2019-09-05', b'1', NULL, 1, 1, 1),
(34, 'HD0034', '2019-09-05', b'1', NULL, 1, 3, 1),
(35, 'HD0035', '2019-09-05', b'1', NULL, 1, 5, 1),
(47, 'HD0036', '2019-09-06', b'1', NULL, 1, 1, 1),
(50, 'HD0050', '2019-09-06', b'1', NULL, 1, 3, 1),
(53, 'HD0051', '2019-09-07', b'1', NULL, 1, 3, 1),
(55, 'HD0054', '2019-09-07', b'1', NULL, 1, 3, 1),
(56, 'HD0056', '2019-09-07', b'1', NULL, 1, 6, 1),
(57, 'HD0057', '2019-09-07', b'1', NULL, 1, 4, 1),
(58, 'HD0058', '2019-09-07', b'1', NULL, 1, 3, 1),
(60, 'HD0059', '2019-09-07', b'1', NULL, 1, 5, 1),
(61, 'HD0061', '2019-09-07', b'1', NULL, 1, 3, 1),
(62, 'HD0062', '2019-09-07', b'1', NULL, 1, 7, 1),
(63, 'HD0063', '2019-09-07', b'1', NULL, 1, 3, 1),
(64, 'HD0064', '2019-09-07', b'1', NULL, 1, 3, 1),
(65, 'HD0065', '2019-09-07', b'1', NULL, 1, 5, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadonchitiet`
--

DROP TABLE IF EXISTS `hoadonchitiet`;
CREATE TABLE IF NOT EXISTS `hoadonchitiet` (
  `hoadon_id` int(11) NOT NULL,
  `monan_id` int(11) NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `soluong` int(11) DEFAULT NULL,
  PRIMARY KEY (`hoadon_id`,`monan_id`),
  KEY `fk_HOADONCHITIET_MONAN1_idx` (`monan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadonchitiet`
--

INSERT INTO `hoadonchitiet` (`hoadon_id`, `monan_id`, `price`, `soluong`) VALUES
(13, 1, '50000', 2),
(13, 2, '50000', 1),
(13, 3, '35000', 2),
(14, 7, '30000', 1),
(14, 8, '40000', 1),
(14, 9, '35000', 1),
(18, 1, '50000', 1),
(18, 2, '50000', 1),
(18, 3, '35000', 1),
(19, 1, '50000', 1),
(19, 13, '17000', 1),
(19, 14, '5000', 1),
(20, 1, '50000', 3),
(20, 8, '40000', 1),
(21, 2, '50000', 1),
(21, 3, '35000', 2),
(21, 4, '40000', 3),
(22, 1, '50000', 1),
(23, 1, '50000', 2),
(23, 2, '50000', 1),
(23, 3, '35000', 2),
(24, 1, '50000', 1),
(24, 2, '50000', 1),
(24, 3, '35000', 1),
(24, 7, '30000', 1),
(24, 8, '40000', 1),
(25, 1, '50000', 1),
(25, 2, '50000', 1),
(25, 3, '35000', 1),
(25, 4, '40000', 1),
(25, 8, '40000', 1),
(26, 1, '50000', 2),
(26, 2, '50000', 2),
(27, 2, '50000', 1),
(27, 3, '35000', 1),
(27, 4, '40000', 2),
(28, 1, '50000', 1),
(29, 4, '40000', 32),
(29, 7, '30000', 10),
(29, 8, '40000', 1),
(31, 1, '50000', 3),
(31, 2, '50000', 2),
(32, 4, '40000', 1),
(32, 7, '30000', 1),
(32, 8, '40000', 1),
(32, 12, '18000', 1),
(32, 13, '17000', 3),
(33, 1, '50000', 1),
(33, 2, '50000', 1),
(33, 3, '35000', 1),
(34, 1, '50000', 5),
(34, 2, '50000', 1),
(34, 3, '35000', 1),
(34, 4, '40000', 1),
(35, 5, '25000', 1),
(35, 6, '20000', 1),
(35, 8, '40000', 1),
(47, 1, '50000', 2),
(47, 2, '50000', 2),
(47, 3, '35000', 3),
(50, 3, '35000', 2),
(50, 5, '25000', 2),
(50, 6, '20000', 3),
(53, 1, '50000', 1),
(53, 2, '50000', 1),
(53, 3, '35000', 1),
(55, 1, '50000', 1),
(55, 2, '50000', 2),
(55, 3, '35000', 3),
(56, 12, '18000', 2),
(56, 13, '17000', 1),
(56, 14, '5000', 2),
(57, 5, '25000', 1),
(57, 6, '20000', 1),
(57, 7, '30000', 1),
(58, 1, '50000', 3),
(58, 2, '50000', 3),
(58, 3, '35000', 1),
(58, 5, '25000', 2),
(60, 8, '40000', 1),
(61, 1, '50000', 1),
(61, 2, '50000', 2),
(61, 3, '35000', 2),
(61, 4, '40000', 1),
(61, 5, '25000', 1),
(62, 11, '15000', 1),
(62, 12, '18000', 1),
(62, 13, '17000', 2),
(62, 14, '5000', 2),
(63, 1, '50000', 1),
(63, 2, '50000', 1),
(63, 3, '35000', 2),
(63, 4, '40000', 3),
(63, 5, '25000', 1),
(64, 1, '50000', 1),
(64, 2, '50000', 2),
(64, 3, '35000', 2),
(65, 11, '15000', 1),
(65, 13, '17000', 1),
(65, 14, '5000', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `phone_no` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`id`, `no`, `name`, `address`, `phone_no`, `email`, `image`) VALUES
(1, NULL, 'Khách lẻ', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaimonan`
--

DROP TABLE IF EXISTS `loaimonan`;
CREATE TABLE IF NOT EXISTS `loaimonan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaimonan`
--

INSERT INTO `loaimonan` (`id`, `name`, `description`) VALUES
(1, 'Món chiên', NULL),
(2, 'Cơm', NULL),
(3, 'Món xào', NULL),
(4, 'Món mặn', NULL),
(5, 'Món nướng', NULL),
(6, 'Món tráng miệng', NULL),
(7, 'Nước', NULL),
(8, 'Sinh tố', NULL),
(9, 'Món lẩu', NULL),
(10, 'Món chay', NULL),
(12, 'Món Hồng Kong', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loainguyenlieu`
--

DROP TABLE IF EXISTS `loainguyenlieu`;
CREATE TABLE IF NOT EXISTS `loainguyenlieu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `unit` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loainguyenlieu`
--

INSERT INTO `loainguyenlieu` (`id`, `name`, `unit`) VALUES
(1, 'Thịt', 'Kg'),
(2, 'Rau, củ, quả', 'Kg'),
(3, 'Sữa', 'Ml'),
(4, 'Cá', 'Kg'),
(5, 'Trứng', 'Hộp'),
(6, 'Nước', 'Lít');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monan`
--

DROP TABLE IF EXISTS `monan`;
CREATE TABLE IF NOT EXISTS `monan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `unit` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `status` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loaimonan_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_MONAN_LOAIMONAN1_idx` (`loaimonan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `monan`
--

INSERT INTO `monan` (`id`, `no`, `name`, `price`, `unit`, `status`, `image`, `loaimonan_id`) VALUES
(1, '1bllvktc', 'Bò lúc lắc với khoai tây chiên', '50000', 'Dĩa', 'Còn', 'Bò_lúc_lắc_với_khoai_tây_chiên.jpg', 1),
(2, '1dhcnm', 'Đùi heo chiên nước mắm', '50000', 'Dĩa', 'Còn', 'Đùi_heo_chiên_nước_mắm.jpg', 1),
(3, '2ccdc', 'Cơm chiên dương châu', '35000', 'Dĩa', 'Còn', 'Cơm_chiên_dương_châu.jpg', 2),
(4, '2cchs', 'Cơm chiên hải sản', '40000', 'Dĩa', 'Còn', 'Cơm_chiên_hải_sản.jpg', 2),
(5, '3rdxt', 'Rau dền xào tỏi', '25000', 'Dĩa', 'Không', 'Rau_dền_xào_tỏi.JPG', 3),
(6, '3rcvxt', 'Rau chân vịt xào trứng', '20000', 'Dĩa', 'Còn', 'Rau_chân_vịt_xào_trứng.webp', 3),
(7, '4thq', 'Thịt heo quay', '30000', 'Dĩa', 'Còn', 'Thịt_heo_quay.jpg', 4),
(8, '4ctkd', 'Cà tím kho đậu', '40000', 'Dĩa', 'Còn', 'Cà_tím_kho_đậu.jpg', 4),
(9, '5bnxq', 'Món nướng bò rau xiên que', '35000', 'Dĩa', 'Còn', 'Món_nướng_bò_rau_xiên_que.jpg', 5),
(10, '5ctlns', 'Cá thác lác nướng sả', '35.000', 'Dĩa', 'Còn', 'Cá_thác_lác_nướng_sả.jpg', 5),
(11, '6rc', 'Rau câu', '15000', 'Ly', 'Còn', 'Rau_câu.jpg', 6),
(12, '6tctc', 'Trái cây thập cẩm', '18000', 'Dĩa', 'Còn', 'Trái_cây_thập_cẩm.jfif', 6),
(13, '7cpsd', 'Cà phê sữa đá', '17000', 'Ly', 'Còn', 'Coffee_sữa_đá.jpg', 7),
(14, '7ns', 'Nước suối', '5000', 'Chai', 'Còn', 'Nước_suối.png', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monanchitiet`
--

DROP TABLE IF EXISTS `monanchitiet`;
CREATE TABLE IF NOT EXISTS `monanchitiet` (
  `monan_id` int(11) NOT NULL,
  `nguyenlieu_id` int(11) NOT NULL,
  `soluong` float DEFAULT NULL,
  PRIMARY KEY (`monan_id`,`nguyenlieu_id`),
  KEY `fk_MONANCHITIET_NGUYENLIEU1_idx` (`nguyenlieu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `monanchitiet`
--

INSERT INTO `monanchitiet` (`monan_id`, `nguyenlieu_id`, `soluong`) VALUES
(1, 1, 2),
(1, 2, 1),
(1, 3, 1),
(2, 2, 1),
(2, 3, 0.2),
(3, 16, 0.2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguyenlieu`
--

DROP TABLE IF EXISTS `nguyenlieu`;
CREATE TABLE IF NOT EXISTS `nguyenlieu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loainguyenlieu_id` int(11) DEFAULT NULL,
  `loainguyenlieu_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tenloainguyenlieu` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NGUYENLIEU_NO_UNIQUE` (`no`),
  UNIQUE KEY `UK_md2a2uwajnlju03kcjrn474hx` (`name`),
  KEY `fk_NGUYENLIEU_LOAINGUYENLIEU1_idx` (`loainguyenlieu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nguyenlieu`
--

INSERT INTO `nguyenlieu` (`id`, `no`, `name`, `price`, `date`, `image`, `loainguyenlieu_id`, `loainguyenlieu_name`, `tenloainguyenlieu`) VALUES
(1, '1tb', 'Thịt bò', '280.000', '2019-10-10', 'Beef.jpg', 1, NULL, NULL),
(2, '1thd', 'Thịt heo đùi', '80.000', '2019-10-10', 'Pork.jpg', 1, NULL, NULL),
(3, '2rd', 'Rau dền', '10.000', '2019-10-10', 'Rau_den.png', 2, NULL, NULL),
(4, '2rcv', 'Rau chân vịt', '9.000', '2019-10-10', 'Rau_chan_vit.jpg', 2, NULL, NULL),
(6, '2kt', 'Khoai tây', '22.000', '2019-10-10', 'Potato.jpg', 2, NULL, NULL),
(7, '3stvm', 'Sữa Tươi Vinamilk 100% Có Đường - Hộp 900ml', '34.000', '2019-10-10', 'milk.jpg', 3, NULL, NULL),
(8, '4ct', 'Cá thu', '250.000', '2019-10-10', 'Mackerel.jpg', 4, NULL, NULL),
(9, '4ctl', 'Cá thác lác', '220.000', '2019-10-10', 'Cá_thác_lác.jpg', 4, NULL, NULL),
(15, '5tv', 'Trứng vịt', '30000', '2019-10-10', 'Duck\'s_egg.jpg', 5, NULL, NULL),
(16, '5tg', 'Trứng gà tươi', '30000', '2019-10-10', 'Eggs.jpg', 5, NULL, NULL),
(18, '5tc', 'Trứng cút', '28.500', '2019-10-10', 'Trứng_cút.jpg', 5, NULL, NULL),
(25, '5tn', 'Trứng ngỗng', '30000', '2019-12-17', 'Pork.jpg', 5, NULL, NULL),
(26, '5tdd', 'Trứng đà điễu', '32000', '2019-12-17', 'Mackerel.jpg', 5, NULL, NULL),
(28, 'rx', 'Rau xanh sạch', '250000', '2019-10-05', 'Rau_den.png', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE IF NOT EXISTS `nhanvien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loai` smallint(4) DEFAULT NULL,
  `image` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chucvu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_NHANVIEN_CHUCVU_idx` (`chucvu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`id`, `no`, `name`, `phone`, `email`, `password`, `loai`, `image`, `chucvu_id`) VALUES
(1, '001', 'VIETDEPTRAI', '0904716299', 'nguyenthanhviet31031998@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 2, NULL, 2),
(2, '002', 'HIEP', '1234567890', 'nguyenvanhiep1998@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 1, NULL, 1),
(3, '003', 'TAM', '0987654321', 'dominhtam1998@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 2, NULL, 2),
(4, '004', 'DANH', '0908771234', 'buingocdanh123@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 1, NULL, 3),
(5, '005', 'KHANG', '1239874561', 'dinhkhang1998@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 3, NULL, 1),
(8, '006', 'ADMIN', NULL, 'admin@gmail.com', '$2a$10$0aJcB6Vv7VQMqrC3Vn79u.5dmhLj5lmQRe6hCXjkc3RhXnqqMa2MG', 4, NULL, 4);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bep`
--
ALTER TABLE `bep`
  ADD CONSTRAINT `bep_ibfk_1` FOREIGN KEY (`hoadon_id`) REFERENCES `hoadon` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_HOADON_BAN1` FOREIGN KEY (`ban_id`) REFERENCES `ban` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_HOADON_KHACHHANG1` FOREIGN KEY (`khachhang_id`) REFERENCES `khachhang` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_HOADON_NHANVIEN1` FOREIGN KEY (`nhanvien_id`) REFERENCES `nhanvien` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hoadonchitiet`
--
ALTER TABLE `hoadonchitiet`
  ADD CONSTRAINT `fk_HOADONCHITIET_HOADON1` FOREIGN KEY (`hoadon_id`) REFERENCES `hoadon` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_HOADONCHITIET_MONAN1` FOREIGN KEY (`monan_id`) REFERENCES `monan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `monan`
--
ALTER TABLE `monan`
  ADD CONSTRAINT `fk_MONAN_LOAIMONAN1` FOREIGN KEY (`loaimonan_id`) REFERENCES `loaimonan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `monanchitiet`
--
ALTER TABLE `monanchitiet`
  ADD CONSTRAINT `FKhdfdfysax86ngb5rw77l59xuq` FOREIGN KEY (`nguyenlieu_id`) REFERENCES `nguyenlieu` (`id`),
  ADD CONSTRAINT `FKlqfxhauugrhfcvxqyt6rb4nfv` FOREIGN KEY (`monan_id`) REFERENCES `monan` (`id`),
  ADD CONSTRAINT `fk_MONANCHITIET_MONAN1` FOREIGN KEY (`monan_id`) REFERENCES `monan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_MONANCHITIET_NGUYENLIEU1` FOREIGN KEY (`nguyenlieu_id`) REFERENCES `nguyenlieu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `nguyenlieu`
--
ALTER TABLE `nguyenlieu`
  ADD CONSTRAINT `fk_NGUYENLIEU_LOAINGUYENLIEU1` FOREIGN KEY (`loainguyenlieu_id`) REFERENCES `loainguyenlieu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `fk_NHANVIEN_CHUCVU` FOREIGN KEY (`chucvu_id`) REFERENCES `chucvu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
