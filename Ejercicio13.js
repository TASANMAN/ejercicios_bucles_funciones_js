//Ejercicio

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
]

function calculateActorsAges(actors) {
  // Obtener el año actual
  const currentYear = new Date().getFullYear()

  // Mapear el array de actores para obtener un nuevo array con nombres y edades
  return actors.map((actor) => ({
    name: actor.name,
    age: currentYear - actor.born
  }))
}

// Ejemplo de uso
console.log(calculateActorsAges(actors))
