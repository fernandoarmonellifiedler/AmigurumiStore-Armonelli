# AmigurumiStore-Armonelli

Este es el proyecto final del curso de React de Coderhouse.
En este caso, una tienda virtual de amigurumis de creación propia. 

Sobre el proyecto:
- Mi idea es reforzar conceptos previos de React y enfocarme en este framework.
- Decidí utilizar tailwind para el estilo general y css para pequeños toques en el estilo de algunos elementos. Como un extra, mi idea es valerme de la metodología BEM para renombrar las clases de los diferentes elementos. La idea es ampliar el uso de tailwind, sumar styled-components como próximo paso.
- De momento todos los componentes se encuentran en una misma carpeta sin ningun tipo de clasificación y jerarquía. Pretendo reorganizar las carpetas y archivos como asi tambien las llamadas a los componentes para trabajar con el concepto de Atomic Design de Brad Frost (https://bradfrost.com/blog/post/atomic-web-design/) y tener los componentes separados en átomos, moleculas y organismos.
- Como base de datos la app se conecta a Firebase donde están almacenados los productos en una colección y las ordenes de compra generadas en otra.
- El deploy se hace en vercel

Además de los paquetes que vienen instalados por npx create-react-app, agregué:
- react-router-dom: para la navegación general de la app.
- React hooks (useContext, useEffect, useState)
- react-icons: para el carrito de compras
- Firebase
- Tailwind

Es posible ver el desarrollo de la tienda virtual aquí:
https://amigurumi-store-armonelli.vercel.app/
