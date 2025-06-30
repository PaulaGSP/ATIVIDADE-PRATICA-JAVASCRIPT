const leia = require('readline-sync');


let numero1;
let numero2;
let numero3;
let numero4;

let somaConjunto1;
let somaConjunto2;
let diferenca;

numero1 = leia.questionInt("\nDigite o primeiro numero do conjunto 1: ");
numero2 = leia.questionInt("\nDigite o segundo numero do conjunto 1: ");
numero3 = leia.questionInt("\nDigite o primeiro numero do conjunto 2: ");
numero4 = leia.questionInt("\nDigite o segundo numero do conjunto 2: ");

somaConjunto1 = numero1 + numero2;
somaConjunto2 = numero3 + numero4;

diferenca = somaConjunto1 - somaConjunto2

console.log("a soma do conjunto 1 é: " + somaConjunto1.toFixed(1));
console.log("a soma do conjunto 2 é: " + somaConjunto2.toFixed(1));
console.log("a diferença dos conjuntos é: " + diferenca.toFixed(1));
