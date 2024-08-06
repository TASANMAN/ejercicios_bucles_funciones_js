//Ejercicio

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Young', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
]

// Recorremos el array de artistas
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i]
  console.log(`Artist: ${artist.name}`)

  // Recorremos el array de influencias del artista
  for (let j = 0; j < artist.influences.length; j++) {
    const influence = artist.influences[j]
    console.log(`  Influence: ${influence}`)
  }

  // Espacio en blanco entre artistas para claridad
  console.log('')
}
