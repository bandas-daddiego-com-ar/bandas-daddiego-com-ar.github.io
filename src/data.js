const data = [
  [
    'Noesmoscada',
    [
      ['Verte Así', 140],
      ['Que se yo qué hacer', 140],
      ['El Payaso', 120],
      ['Macumba', 95],
      ['Pampa y la Via', 156],
      ['En la Calle', 150],
      ['Bailando al cielo', 150],
      ['Sabor a danza', 150],
    ],
  ],
  [
    'Peregrinos',
    [
      ['Las trémulas canciones', 114],
      ['Ella dijo', 85],
      ['Melancolía', 134],
      ['Un show', 122],
      ['Rimbaud', 140],
      ['Alas rotas', 126],
      ['Mariposas', 100],
      ['Mar del plata', 130],
      ['América', 104],
      ['Luxemburgués', 130],
      ['Las vías del tren', 144],
      ['Eléctricos duendes', 160],
      ['De la hoya', 140],
      ['Doce chicharras', 130],
      ['Cristal', 143],
      ['Pronta entrega', 102],
      ['Es el amor', 120],
      ['El corazón sobre todo', 135],
      ['Aire', 135],
    ]
  ],
  [
    'Perros de la Noche',
    [
      ['Como un Lobo', 130],
      ['Farmacia', 130],
      ['Me Muero', 125],
      ['Todavia', 110],
      ['Pasan las horas', 122],
      ['Tan Distintos', 120],
      ['100 Años', 139],
      ['Infierno Blanco', 115],
      ['Hay Momentos', 94],
      ['Espejo Roto', 129],
      ['Reyes de la Noche', 140],
      ['Gracias', 138],
      ['Dame', 180],
    ],
  ],
];

export function getSongs(index) {
  return data[index][1];
}

export function getSongLists() {
  return data.map((item) => item[0]);
}

export default {
  getSongs,
  getSongLists,
};
