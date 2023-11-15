class Hero {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }
}

let mago = new Hero("Hywenklis", "24", "mago", "magia");
console.log(`O ${mago.tipo} atacou usando ${mago.ataque}`);

let guerreiro = new Hero("Arthur", "29", "guerreiro", "espada");
console.log(`O ${guerreiro.tipo} atacou usando ${guerreiro.ataque}`);

let monge = new Hero("Matheus", "24", "monge", "artes maciais");
console.log(`O ${monge.tipo} atacou usando ${monge.ataque}`);

let ninja = new Hero("João", "24", "ninja", "shuriken");
console.log(`O ${ninja.tipo} atacou usando ${ninja.ataque}`);