-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2024 a las 20:53:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `seguros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aseguradoras`
--

CREATE TABLE `aseguradoras` (
  `ID_aseguradora` int(11) NOT NULL,
  `Nombre` text NOT NULL,
  `Tipo_poliza` text NOT NULL,
  `Cobertura` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID_cliente` int(11) NOT NULL,
  `Cedula` varchar(17) NOT NULL,
  `NombresCliente` varchar(100) NOT NULL,
  `Direccion` varchar(150) NOT NULL,
  `Telefono` varchar(17) NOT NULL,
  `Correo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ID_cliente`, `Cedula`, `NombresCliente`, `Direccion`, `Telefono`, `Correo`) VALUES
(1, '1712730330', 'Rodrigo Javier', 'Baldeon Ortega', '0993677621', 'rodbal79@hotmail.com'),
(2, '0400497152', 'Wilson Hernán', 'Calapi Madera', '062770305', 'wilsoncalapim@gmail.com'),
(3, '0400640744', 'Laura Yolanda', 'Muñoz Cuasquer', '0980931510', 'lauritamc@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polizas`
--

CREATE TABLE `polizas` (
  `ID_poliza` int(11) NOT NULL,
  `ID_aseguradora` int(11) NOT NULL,
  `ID_cliente` int(11) NOT NULL,
  `Tipo_cobertura` text NOT NULL,
  `Monto` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aseguradoras`
--
ALTER TABLE `aseguradoras`
  ADD PRIMARY KEY (`ID_aseguradora`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID_cliente`);

--
-- Indices de la tabla `polizas`
--
ALTER TABLE `polizas`
  ADD PRIMARY KEY (`ID_poliza`),
  ADD KEY `polizas_ibfk_1` (`ID_aseguradora`),
  ADD KEY `polizas_ibfk_2` (`ID_cliente`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `polizas`
--
ALTER TABLE `polizas`
  ADD CONSTRAINT `polizas_ibfk_1` FOREIGN KEY (`ID_aseguradora`) REFERENCES `aseguradoras` (`ID_aseguradora`),
  ADD CONSTRAINT `polizas_ibfk_2` FOREIGN KEY (`ID_cliente`) REFERENCES `clientes` (`ID_cliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
