//*-------------------------------------------------------------------------------------------
const productos = {
    cafe: [
        {
          id: 1,
          nombre: "Café americano",
          precio: 3.5,
          descripcion: "Café preparado con agua caliente y servido en taza."
        },
        {
          id: 2,
          nombre: "Café con leche",
          precio: 4.0,
          descripcion: "Café preparado con leche y servido en taza."
        },
        {
          id: 3,
          nombre: "Espresso",
          precio: 2.5,
          descripcion: "Café preparado con agua caliente a alta presión y servido en taza pequeña."
        },
        {
          id: 4,
          nombre: "Café cortado",
          precio: 3.0,
          descripcion: "Espresso con un poco de leche vaporizada y servido en taza pequeña."
        },
        {
          id: 5,
          nombre: "Café con hielo",
          precio: 3.5,
          descripcion: "Café preparado con agua caliente y servido en vaso con hielo."
        }
      ],
  cafesConLeche: [
    {
      id: 4,
      nombre: "Café con Leche",
      precio: 3.5,
      descripcion: "Café negro al que se le añade leche caliente o espumada.",
    },
    {
      id: 5,
      nombre: "Café Cortado",
      precio: 3.0,
      descripcion: "Café negro con un toque de leche.",
    },
    {
      id: 6,
      nombre: "Café Latte",
      precio: 4.0,
      descripcion:
        "Café hecho con leche caliente y una pequeña cantidad de espresso.",
    },
  ],
  cafesEspeciales: [
    {
      id: 7,
      nombre: "Cappuccino",
      precio: 4.5,
      descripcion:
        "Café hecho con leche caliente, una pequeña cantidad de espresso y espuma de leche.",
    },
    {
      id: 8,
      nombre: "Mocha",
      precio: 5.0,
      descripcion: "Café hecho con chocolate, leche caliente y espresso.",
    },
    {
      id: 9,
      nombre: "Café Irlandés",
      precio: 6.0,
      descripcion:
        "Café con whisky irlandés, crema batida y un toque de azúcar.",
    },
  ],
  capuchino: [
    {
      id: 1,
      nombre: "Capuchino Tradicional",
      precio: 4.5,
      descripcion: "Café espresso, leche vaporizada y espuma de leche.",
    },
    {
      id: 2,
      nombre: "Capuchino Doble",
      precio: 6.0,
      descripcion:
        "Doble ración de café espresso, leche vaporizada y espuma de leche.",
    },
    {
      id: 3,
      nombre: "Capuchino Vainilla",
      precio: 5.0,
      descripcion:
        "Café espresso, leche vaporizada, espuma de leche y jarabe de vainilla.",
    },
    {
      id: 4,
      nombre: "Capuchino Caramel",
      precio: 5.0,
      descripcion:
        "Café espresso, leche vaporizada, espuma de leche y jarabe de caramelo.",
    },
    {
      id: 5,
      nombre: "Capuchino Moka",
      precio: 5.5,
      descripcion:
        "Café espresso, leche vaporizada, espuma de leche y jarabe de chocolate.",
    },
  ],
  te: [
    {
      id: 1,
      nombre: "Té verde",
      precio: 3.0,
      descripcion: "Té de origen chino, elaborado con hojas frescas y sin fermentar."
    },
    {
      id: 2,
      nombre: "Té negro",
      precio: 2.5,
      descripcion: "Té fuerte y con sabor intenso, elaborado con hojas fermentadas."
    },
    {
      id: 3,
      nombre: "Té de hierbas",
      precio: 3.5,
      descripcion: "Infusión elaborada con hierbas y especias, sin teína ni cafeína."
    },
    {
      id: 4,
      nombre: "Té rojo",
      precio: 4.0,
      descripcion: "Té de origen chino, conocido por sus propiedades adelgazantes y digestivas."
    },
    {
      id: 5,
      nombre: "Té blanco",
      precio: 4.5,
      descripcion: "Té delicado y sutil, elaborado con hojas jóvenes y sin procesar."
    },
    {
      id: 6,
      nombre: "Té de jazmín",
      precio: 3.5,
      descripcion: "Té aromático de origen chino, elaborado con hojas de té y flores de jazmín."
    },
    {
      id: 7,
      nombre: "Té chai",
      precio: 4.5,
      descripcion: "Té especiado de origen indio, elaborado con té negro, leche y especias."
    },
    {
      id: 8,
      nombre: "Té de frutas",
      precio: 3.5,
      descripcion: "Infusión de frutas y hierbas, sin teína ni cafeína."
    },
    {
      id: 9,
      nombre: "Té de menta",
      precio: 3.0,
      descripcion: "Té de hierbas con menta, conocido por sus propiedades digestivas y refrescantes."
    },
    {
      id: 10,
      nombre: "Té de manzanilla",
      precio: 3.0,
      descripcion: "Té de hierbas con flores de manzanilla, conocido por sus propiedades calmantes y relajantes."
    }
  ]
};
module.exports.productos = productos;;