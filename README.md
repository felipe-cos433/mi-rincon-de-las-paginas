# 📚 El Rincón de las Páginas

Una tienda virtual de libros desarrollada con React, que permite a los usuarios explorar títulos, filtrar por categorías, realizar compras interactivas y gestionar un carrito persistente con una experiencia fluida y visualmente elegante.

## 🚀 Funcionalidades principales

- 🔐 Autenticación con roles (`admin` / `cliente`) y rutas protegidas
- 🛍️ Catálogo con filtros dinámicos por categoría, búsqueda y precio
- ✨ Modal de compra con formulario y confirmación animada
- 🛒 Carrito persistente con `localStorage` y vista detallada
- ✅ Animación visual al finalizar la compra (sin librerías externas)
- 🧱 Estructura organizada y adaptable para futuros módulos

## 🗂️ Estructura
src/ ├── components/ │ ├── Navbar.jsx │ ├── Footer.jsx │ ├── ModalCompra.jsx ├── pages/ │ ├── Home.jsx │ ├── Login.jsx │ ├── Register.jsx │ ├── Tienda.jsx │ ├── Carrito.jsx │ ├── AdminDashboard.jsx │ └── ClientView.jsx ├── styles/ │ ├── ModalCompra.css │ ├── Tienda.css │ ├── Carrito.css ├── App.jsx └── main.jsx


## ⚙️ Tecnologías utilizadas

- React
- React Router DOM
- Vite
- CSS modular y animaciones nativas

## ▶️ Instalación local

1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/el-rincon-de-las-paginas.git

npm install

npm run dev
