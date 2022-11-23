const nome = prompt("Digite seu nome")
const sobrenome = prompt("Digite seu sobrenome")
let nomecompleto = `${nome} ${sobrenome}`

console.log(nomecompleto)
alert(`${nomecompleto}\n${sobrenome.toUpperCase()}, ${nome}`)