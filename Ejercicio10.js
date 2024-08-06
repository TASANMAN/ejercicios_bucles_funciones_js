//Ejercicio
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

// Función para obtener la capital de un país
function getCapital(country) {
  // Convertimos el nombre del país a mayúsculas para hacer la búsqueda insensible al caso
  const capital = capitals[country]

  // Verificamos si el país está en el objeto
  if (capital) {
    return capital
  } else {
    return 'Country not found in the list.'
  }
}

// Ejemplos de uso
console.log(getCapital('Spain')) // 'Madrid'
console.log(getCapital('Germany')) // 'Berlin'
console.log(getCapital('Brazil')) // 'Country not found in the list.'
