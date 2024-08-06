//Ejercicio
const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]

function averageMovieDuration(movies) {
  // Verifica que la lista de películas no esté vacía
  if (movies.length === 0) {
    return 0
  }

  // Suma todas las duraciones de las películas
  let totalDuration = 0
  for (const movie of movies) {
    totalDuration += movie.duration
  }

  // Calcula el promedio
  const averageDuration = totalDuration / movies.length

  return averageDuration
}

// Ejemplo de uso
console.log(averageMovieDuration(movies)) // Salida: 139
