//Ejercicio
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  // Recorre el array de mutantes
  for (const mutant of mutants) {
    // Verifica si el poder del mutante coincide con el poder buscado
    if (mutant.power === power) {
      return `Mutante(s) con el poder '${power}' encontrado(s).`
    }
  }

  // Si no se encuentra ningún mutante con el poder, retorna un mensaje indicando esto
  return `Ningún mutante con el poder '${power}' encontrado.`
}
