const leia = require('readline-sync');


let nota1;
let nota2;
let nota3;
let nota4;

let soma;
let media;


nota1 = leia.questionInt("\nDigite a nota do primeiro bimestre: ");
nota2 = leia.questionInt("\nDigite a nota do segundo bimestre: ");
nota3 = leia.questionInt("\nDigite a nota do terceiro bimestre: ");
nota4 = leia.questionInt("\nDigite a nota do quarto bimestre: ");

soma = nota1 + nota2 + nota3 + nota3;
media = soma / 4;


console.log("Sua média é: " + media.toFixed(1));
