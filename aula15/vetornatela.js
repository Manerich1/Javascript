let vetores = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}

console.log('Agora vamos organizar o vetor em forma crescente')

// vetores.sort() faz com que o seu vetor se organize de forma crescente
vetores.sort()

// for simplificado para apresentar arrays
for(let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}

// vetores.indexOf() procura um valor específico no vetor (se o valor não existe ele mostrará "-1")
console.log(`O valor 7 está na posição: ${vetores.indexOf(7)}`)