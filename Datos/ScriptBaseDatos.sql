CREATE DATABASE [Pedidos];
USE [Pedidos]
CREATE TABLE [dbo].[Producto](
[Codigo] [nvarchar](5) NOT NULL PRIMARY KEY,
[Categoria] [nvarchar](50) NULL,
[Nombre] [nvarchar](50) NULL,
[Precio] [nvarchar](10) NULL,
[Cantidad] [int] NULL,
)
GO
COMMIT