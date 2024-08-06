//Ejercicio

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

// Objeto para almacenar las canciones clasificadas por género
const tracksByGenre = {}

// Recorremos el array de canciones
for (let i = 0; i < tracks.length; i++) {
  const track = tracks[i]
  const genre = track.genre

  // Si el género aún no existe en el objeto, lo inicializamos con un array vacío
  if (!tracksByGenre[genre]) {
    tracksByGenre[genre] = []
  }

  // Añadimos la canción al array correspondiente en el objeto
  tracksByGenre[genre].push(track.title)
}

// Imprimimos el objeto final por consola
console.log(tracksByGenre)
