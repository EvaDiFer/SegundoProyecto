// PASO 1: AGREGAMOS NUESTRO ARRAY DE OBJETOS

const PRODUCTOS = [
  {
    id: 1,
    vendedor: 'Cafeteria del Sol',
    precio: 3.5,
    categoria: 'Americano',
    descripcion: 'Café americano recién hecho',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685283047/PROYECTO-2/files/americano-3_800x_dbs6xx.webp',
  },
  {
    id: 2,
    vendedor: 'El Cafetal',
    precio: 4,
    categoria: 'Cappuchino',
    descripcion: 'Capuchino con leche caliente',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272170/PROYECTO-2/files/cafe_capuchino_avsp55.jpg',
  },
  {
    id: 3,
    vendedor: 'La Taza Dorada',
    precio: 2.8,
    categoria: 'Latte',
    descripcion: 'Latte de vainilla con doble espresso',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685280770/PROYECTO-2/files/receta-cafe-latte-casero-de-vainilla_cu7d9u.jpg',
  },
  {
    id: 4,
    vendedor: 'Cafeteria del Pueblo',
    precio: 1.8,
    categoria: 'Cafe con leche',
    descripcion: 'Disponible sin lactosa y avena',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272170/PROYECTO-2/files/cafe_con_leche_zrepbt.jpg',
  },
  {
    id: 5,
    vendedor: 'La Esquina del Cafe',
    precio: 3.2,
    categoria: 'Cappuccino',
    descripcion: 'Cappuccino con espuma de leche y cacao',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272171/PROYECTO-2/files/cafe_capuchino_cacao_oxbgjf.jpg',
  },
  {
    id: 6,
    vendedor: 'El Cafetal',
    precio: 4,
    categoria: 'Mocha',
    descripcion: 'Café moka con chocolate',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272170/PROYECTO-2/files/cafe_moca_frpex0.jpg',
  },
  {
    id: 7,
    vendedor: 'Cafeteria del Sol',
    precio: 3.25,
    categoria: 'Espresso',
    descripcion: 'Espresso puro y concentrado',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685273062/PROYECTO-2/files/cafe_espresso_tqcvjn.jpg',
  },
  {
    id: 8,
    vendedor: 'La Taza Dorada',
    precio: 4.5,
    categoria: 'Macchiato',
    descripcion: 'Macchiato con manchas de leche',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272171/PROYECTO-2/files/cafe_machiato_ky9ecf.jpg',
  },
  {
    id: 9,
    vendedor: 'Cafeteria del Pueblo',
    precio: 2,
    categoria: 'Cortado',
    descripcion: 'con una pequeña cantidad de leche',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685281740/PROYECTO-2/files/cafe-espresso-e1599134731425_ewulpd.jpg',
  },
  {
    id: 10,
    vendedor: 'La Esquina del Cafe',
    precio: 5.5,
    categoria: 'Frappé',
    descripcion: 'Frappé de café con hielo',
    imagen:
      'https://res.cloudinary.com/djhjuxyes/image/upload/v1685272171/PROYECTO-2/files/cafe_frappe_zlkhex.jpg',
  },
];

const headerTemplate = () => {
  const template = `
    <nav class="navbar">
      <a href="">
        <img class="logo" src="./assets/coffee-7057030_1280.png" alt="logo-página-café">
      </a>
      <ul class="main-nav">
        <li class="link">
          <a href="#">Home</a>
        </li>
        <li class="link">
          <a href="#">About</a>
        </li>
        <li class="link">
          <a href="#productos">Shop</a>
        </li>
        <li class="link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  `;

  const headerElement = document.querySelector('header');
  headerElement.innerHTML = template;
};

headerTemplate();

const heroTemplate = () => {
  const template = `
  <img src="./assets/coffee_specialities-01.png" alt="imagenhero" class="imagen-hero">

  <h1>Discover the taste of real coffee</h1>
  <button class="btn-info"> more info </button>
`;

  const heroElement = document.querySelector('.hero');
  heroElement.innerHTML = template;
};

heroTemplate();

const buscadoresTemplate = () => {
  const template = `  <input placeholder="🔍Buscar producto..." class="buscador" id="general" />
    <select class=sellers name="vendedores" id="seller">
                <option value="All">Elige vendedor</option>
                <option value="Cafeteria del Sol">Cafeteria del Sol</option>
                <option value="El Cafetal">El Cafetal</option>
                <option value="La Taza Dorada">La taza Dorada</option>
                <option value="Cafeteria del Pueblo">Cafeteria del Pueblo</option>
                <option value="La Esquina del Cafe">La esquina del Café</option>
            </select>
            <div class="filtroprecio">
            <input type="number" name="buscador-precio" class="precio" id="price">
            <button id="btn-search" class="btn-search">Precio máx</button>
            <button id="btn-clean" class="btn-clean">Limpiar Filtros</button>
        </div>`;

  const buscadoresTemplate = document.querySelector('.buscadores');
  buscadoresTemplate.innerHTML = template;
};

buscadoresTemplate();

const products = document.querySelector('#productos');
const printProducts = (productos) => {
  products.innerHTML = '';

  productos.forEach((producto) => {
    const template = `
      <div class="producto">
        <div class="imagen">
          <img src="${producto.imagen}" class="img" alt="${producto.categoria}">
        </div>
        <h3 class="categoria">${producto.categoria}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">Precio ${producto.precio}€</p>
        <button class="buy"> Comprar</button>

      </div>
    `;
    products.innerHTML += template;
  });
};

printProducts(PRODUCTOS);

const footerTemplate = () => {
  const template = ` <div id="contact" class="footer-links">
  <ul>
      <li>
          <a href="#">
              <img class="social" src="./assets/1486051940-twitersocialnetworkbrandlogo_79084.png"
                  alt="Twitter">
          </a>Twiter
      </li>
      <li>
          <a href="#">
              <img class=social src="./assets/Instagram_icon-icons.com_66804.png" alt="Instagram">
          </a>Instagram
      </li>
      <li>
          <a href="#">
              <img class="social" src="./assets/Whatsapp_37229.png" alt="WhatsApp">
          </a>Contact
      </li>
  </ul>
</div>

<div>
  <h2>Created with love for Rock{theCode}🚀 </h2>
</div>
  `;
  const footerTemplate = document.querySelector('footer');
  footerTemplate.innerHTML = template;
};

footerTemplate();

// FILTROS POR CATEGORIA Y POR VENDEDOR

const filterProducts = (categoryFilter, selectedSeller) => {
  const filteredProducts = PRODUCTOS.filter(
    (producto) =>
      (selectedSeller === 'All' || producto.vendedor === selectedSeller) &&
      producto.categoria.toLowerCase().includes(categoryFilter)
  );

  const div$$ = document.getElementById('productos');
  div$$.innerHTML = '';

  if (filteredProducts.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.textContent =
      'Lo siento, este producto no se encuentra disponible.';
    mensaje.classList.add('not-found');
    div$$.appendChild(mensaje);
  } else {
    printProducts(filteredProducts);
  }
};

const handleInputChange = (e) => {
  const categoryFilter = e.target.value.toLowerCase();
  const selectedSeller = document.getElementById('seller').value;
  filterProducts(categoryFilter, selectedSeller);
};

const handleSelectChange = (e) => {
  const categoryFilter = document.getElementById('general').value.toLowerCase();
  const selectedSeller = e.target.value;
  filterProducts(categoryFilter, selectedSeller);
};

const generalInput$$ = document.getElementById('general');
generalInput$$.addEventListener('input', handleInputChange);

const seller$$ = document.getElementById('seller');
seller$$.addEventListener('change', handleSelectChange);

// FILTRO POR PRECIO
const getElementByPrice = (PRODUCTOS, maxPrice) => {
  const filterProductos = PRODUCTOS.filter(
    (producto) => Number(producto.precio) <= Number(maxPrice)
  );

  printProducts(filterProductos);
};

const filterByPrice = document.querySelector('#btn-search');
filterByPrice.addEventListener('click', () => {
  const priceFilter = document.querySelector('#price');
  const maxPrice = priceFilter.value;

  getElementByPrice(PRODUCTOS, maxPrice);
});

// FILTRO DE RESET
const priceFilter$$ = document.querySelector('#price');
const cleanButton$$ = document.querySelector('#btn-clean');

cleanButton$$.addEventListener('click', () => {
  printProducts(PRODUCTOS);

  priceFilter$$.value = '';
});
