//Ejercicio
const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.0 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
]

// Variable para acumular la duración total de los álbumes de rock
let totalRockDuration = 0

// Recorremos el array de álbumes
for (let i = 0; i < albums.length; i++) {
  if (albums[i].genre === 'Rock') {
    totalRockDuration += albums[i].duration // Acumulamos la duración si el álbum es de rock
  }
}

// Imprimimos el total de duraciones de los álbumes de rock
console.log(totalRockDuration)
