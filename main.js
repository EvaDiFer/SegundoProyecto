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

//COLOCAMOS NUESTRAS CONSTANTES ARRIBA PARA TENERLAS A MANO.
const div$$ = document.getElementById('products');
const generalInput$$ = document.getElementById('general');
const seller$$ = document.getElementById('seller');
const filterByPrice$$ = document.querySelector('#btn-search');
const cleanButton$$ = document.querySelector('#btn-clean');
const priceFilter$$ = document.querySelector('#price');

// // PINTARPRODUCTOS--
const printProducts = (producto) => {
  // const div$$ = document.getElementById('products');
  div$$.innerHTML = '';

  producto.forEach((producto) => {
    const template = `
      <div class="producto">
        <div class="imagen">
          <img src="${producto.imagen}" class="img" alt="${producto.categoria}">
        </div>
        <h3 class="categoria">${producto.categoria}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">Precio ${producto.precio}€</p>

      </div>
    `;

    div$$.innerHTML += template;
  });
};

//FILTRO DE BÚSQUEDA CON DOS ARGUMENTOS. CATEGORÍA GENERAL Y VENDEDOR.

const filterProducts = (categoryFilter, selectedSeller) => {
  const filteredProducts = PRODUCTOS.filter(
    (producto) =>
      (selectedSeller === 'All' || producto.vendedor === selectedSeller) &&
      producto.categoria.toLowerCase().includes(categoryFilter)
  );

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

//CREACIÓN DE EVENTOS Y ESCUCHADORES

const handleInputChange = (e) => {
  const categoryFilter = e.target.value.toLowerCase();
  const selectedSeller = seller$$.value;
  filterProducts(categoryFilter, selectedSeller);
};

const handleSelectChange = (e) => {
  const categoryFilter = generalInput$$.value.toLowerCase();
  const selectedSeller = e.target.value;
  filterProducts(categoryFilter, selectedSeller);
};

generalInput$$.addEventListener('input', handleInputChange);

seller$$.addEventListener('change', handleSelectChange);

// BÚSQUEDA POR PRECIO

const getElementByPrice = (PRODUCTOS, maxPrice) => {
  const filterProductos = PRODUCTOS.filter(
    (producto) => Number(producto.precio) <= Number(maxPrice)
  );

  printProducts(filterProductos);
};

filterByPrice$$.addEventListener('click', () => {
  const maxPrice = priceFilter$$.value;

  getElementByPrice(PRODUCTOS, maxPrice);
});

// FILTRO DE RESET

cleanButton$$.addEventListener('click', () => {
  printProducts(PRODUCTOS);

  priceFilter$$.value = '';
});

// // MOSTRAR TODOS LOS PRODUCTOS
printProducts(PRODUCTOS);
