export const petList = [
  { id: 1, name: 'Satoshi', isValid: true},
  { id: 2, name: 'Gwei', isValid: false},
]

export const addPet = (name) => {
  const id = petList.length + 1
  petList.push({
    id,
    name: name,
    isValid: true
  })
  return id
}