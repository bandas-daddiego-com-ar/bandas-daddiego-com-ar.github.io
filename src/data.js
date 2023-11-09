const data = [
  [
    'Noesmoscada',
    [
      ["El Error", 122],
      ["Ciclotimia", 134],
      ["A Las Nueve", 130],
      ["Verte Así", 140],
      ["El Payaso", 120],
      ["Lunes", 140],
      ["Macumba", 95],
      ["En La Calle", 150],
      ["Cero A La Izquierda", 142],
      ["En El Último Bar", 120],
      ["Que Se Yo Que Hacer", 140],
      ["Tira Para Arriba", ],
      ["Pampa - Ramon", 156],
      ["Bailando Al Cielo", 150],
      ["Sabor A Danza", 150]
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
      ['Down', 128],
      ['Tan Distintos', 120],
      ['100 Años', 139],
      ['Todavia', 110],
      ['Pasan las horas', 122],
      ['Hay Momentos', 94],
      ['Espejo Roto', 129],
      ['Infierno Blanco', 115],
      ['Como un Lobo', 130],
      ['Me Muero', 125],
      ['Farmacia', 130],
      ['Gracias', 138],
      ['Reyes de la Noche', 140],
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
