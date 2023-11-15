let nome = prompt("Digite o nome do Herói:");
let xp = prompt("Digite a XP total do Herói:");
xp = parseInt(xp);

if (xp <= 1000) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Ferro"} com ${xp} de EXP.`)
} else if (xp > 1000  && xp < 2001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Bronze"} com ${xp} de EXP.`)
} else if (xp > 2000  && xp < 6001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Prata"} com ${xp} de EXP.`)
} else if (xp > 6000  && xp < 7001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Ouro"} com ${xp} de EXP.`)
} else if (xp > 7000  && xp < 8001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Platina"} com ${xp} de EXP.`)
} else if (xp > 8000  && xp < 9001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Ascendente"} com ${xp} de EXP.`)
} else if (xp > 9000  && xp < 10001) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"Imortal"} com ${xp} de EXP.`)
} else if (xp > 10000) {
 console.log(`O Herói de nome: ${nome}, está no nível: ${"FELIPÃO"} com ${xp} de EXP.`)
}