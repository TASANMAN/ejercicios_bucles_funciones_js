//Ejercicio

function findOldestXMen(xMen) {
  // Verificamos si el array está vacío
  if (xMen.length === 0) {
    return null
  }

  // Inicializamos la variable para almacenar el miembro más antiguo
  let oldestXMen = xMen[0]

  // Iteramos a través del array
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldestXMen.year) {
      oldestXMen = xMen[i]
    }
  }

  return oldestXMen
}

// Array de miembros de los X-Men
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

// Probamos la función
const oldestXMen = findOldestXMen(xMen)
console.log(oldestXMen)
