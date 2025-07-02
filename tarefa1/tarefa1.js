const leia = require('readline-sync');


let salario;
let abono;

let soma;


salario = leia.questionInt("\nDigite o seu salario: ");
abono = leia.questionInt("\nDigite o seu abono: ");

soma = salario + abono;

console.log("Seu novo salário é: " + soma);

