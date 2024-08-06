//Ejercicio
const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
]

// Variable para guardar la serie más antigua
let oldestCartoon = cartoons[0] // Inicialmente, consideramos el primer elemento como el más antiguo

// Recorremos el array para encontrar el más antiguo
for (let i = 1; i < cartoons.length; i++) {
  if (cartoons[i].debut < oldestCartoon.debut) {
    oldestCartoon = cartoons[i] // Actualizamos el más antiguo si encontramos uno más viejo
  }
}

// Imprimimos el nombre del dibujo animado más antiguo
console.log(oldestCartoon.name)
