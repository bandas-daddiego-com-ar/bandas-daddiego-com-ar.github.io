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
  ['Peregrinos', [['Es el Amor', 110]]],
  [
    'Perros de la Noche',
    [
      ['Como un Lobo', 130],
      ['Farmacia', 130],
      ['Me Muero', 125],
      ['Todavia', 110],
      ['Pasan las horas', 122],
      ['Tan Distintos', 120],
      ['Infierno Blanco', 115],
      ['Reyes de la Noche', 140],
      ['Hay Momentos', 94],
      ['Espejo Roto', 129],
      ['100 Años', 139],
      ['Dame', 180],
      ['Gracias', 138],
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
