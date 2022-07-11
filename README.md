# Mi tienda reactiva
Proyecto final integrador para el curso de React JS en [CODERHOUSE](https://www.coderhouse.com/). Consiste en una tienda de venta de productos tecnológicos, implementada con la librería [React](https://reactjs.org/).

----------

## Características técnicas del proyecto
- Sitio SPA ( Single Page Aplication) 
- Navegación mediante [React Routing](https://v5.reactrouter.com/) 
- Estilos implementados con [React Bootstrap](https://react-bootstrap.github.io/)
- Consulta y almacenamiento de datos en [Cloud Firestore](https://firebase.google.com/products/firestore)
- Conexión a servicio de [Firebase](https://firebase.google.com/) mediante API

----------

## Características de la tienda
### 🛒 Carrito / Cesta de compras
La aplicación ofrece al usuario la posibilidad de agregar productos a una cesta de compras, a fin de adquirir varios artículos en una misma orden, facilitando su experiencia de uso en el sitio. Cuenta con una vista previa al checkout donde podrá quitar artículos que ya no desee comprar.

### 📊 Catálogo de productos con control de stock
Cada producto tiene almacenado, además de sus características estáticas (nombre, descripción, categoría, etc.), la cantidad disponible en existencia para el control de inventario en tiempo real. Esto limita la posibilidad de que un cliente intente comprar un producto agotado, o bien procesar una orden de compra con unidades insuficientes. Los niveles se actualizan al generarse la orden. Los productos agotados tendrán una etiqueta `Sin stock`.

### 🛍️ Categoría de productos
Cada producto tendrá como atributo una categoría pre-definida, la cual es utilizada como filtro al acceder a la mismas desde la barra de navegación. La sección `Ofertas` mostrará en pantalla todos los productos que presenten descuentos.

### 🏷️ Ofertas y precios con descuento
Mediante el atributo `discount` puede indicarse si un producto está en oferta y de qué valor es su descuento. Esto creará la correspondiente etiqueta al mostrarse y también resaltará el producto al listarse. Este valor también modifica el precio por el que se genera la orden.

