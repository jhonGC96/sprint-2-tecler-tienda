create database Tienda_01

use Tienda_01

create table dbo.categoria (
	id_categoria INT NOT NULL IDENTITY (1,1),
	nombre_categoria varchar(50) not null,
	PRIMARY KEY (id_categoria)
)

create table dbo.productos (
	id_producto INT NOT NULL IDENTITY (1,1),
	descripcion_prod  varchar(50) NOT NULL,
	precio_prod int not null,
	imagen_prod char (300) NOT NULL,
	cantidad_inventario_prod int not null,
	id_categoria int not null,
	FOREIGN KEY (id_categoria) references dbo.categoria(id_categoria),
	PRIMARY KEY (id_producto)
)

create table dbo.usuarios (
	id_usuario int not null  identity (1,1),
	nombres_usuario varchar (50) not null,
	apellidos_usuario varchar (70) not null, 
	email_usuario varchar (70) not null, 
	username_usuario varchar (20) not null, 
	pass_usuario char(20) not null,
	tipo_usuario char(20) not null,
	primary key(id_usuario) 
)



create table dbo.compras (
	id_compra INT NOT NULL IDENTITY (1,1),
	fecha_compra date,
	hora_compra time,
	id_producto INT NOT NULL,
	id_cliente INT NOT NULL,
	FOREIGN KEY (id_producto) REFERENCES dbo.productos (id_producto),
	FOREIGN KEY (id_cliente ) REFERENCES dbo.usuarios (id_usuario),
	PRIMARY KEY (id_compra)
)

