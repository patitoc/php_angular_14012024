-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-01-2024 a las 02:33:21
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
-- Base de datos: `inventario_sexto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ProductoId` int(11) NOT NULL,
  `Nombre` text NOT NULL,
  `Precio` decimal(8,2) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `FechaIngreso` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ProductoId`, `Nombre`, `Precio`, `Cantidad`, `FechaIngreso`) VALUES
(1, 'Jabón liquido', 5.00, 2, '2024-01-13'),
(2, 'Pasta dental Colgate', 1.00, 5, '2024-01-14'),
(3, 'Arroz macareño viejo', 16.00, 1, '2024-01-14'),
(4, 'Crema para peinar', 4.00, 2, '2024-01-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `ProveedorId` int(11) NOT NULL,
  `Nombres` text NOT NULL,
  `Telefono` text NOT NULL,
  `Correo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`ProveedorId`, `Nombres`, `Telefono`, `Correo`) VALUES
(1, 'Rodrigo Baldeon', '0993677621', 'rodbal79@hotmail.com'),
(2, 'Patty Calapi', '0984923825', 'ypcalapi@gmail.com'),
(3, 'Laura Muñoz', '0980931510', 'lauramc@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stocks`
--

CREATE TABLE `stocks` (
  `StockId` int(11) NOT NULL,
  `ProductoId` int(11) NOT NULL,
  `ProveedorId` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Precio_Venta` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `stocks`
--

INSERT INTO `stocks` (`StockId`, `ProductoId`, `ProveedorId`, `Cantidad`, `Precio_Venta`) VALUES
(1, 1, 1, 3, 10.00),
(2, 3, 3, 4, 40.00),
(3, 1, 1, 6, 1.00),
(4, 3, 3, 4, 40.00),
(5, 1, 1, 6, 1.20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ProductoId`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ProveedorId`);

--
-- Indices de la tabla `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`StockId`),
  ADD KEY `Proveedor_Stock` (`ProveedorId`),
  ADD KEY `ProductoId` (`ProductoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ProductoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ProveedorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `stocks`
--
ALTER TABLE `stocks`
  MODIFY `StockId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `ProductoId` FOREIGN KEY (`ProductoId`) REFERENCES `productos` (`ProductoId`),
  ADD CONSTRAINT `Proveedor_Stock` FOREIGN KEY (`ProveedorId`) REFERENCES `proveedores` (`ProveedorId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
