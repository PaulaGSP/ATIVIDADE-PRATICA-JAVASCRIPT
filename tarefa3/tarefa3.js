const leia = require('readline-sync');


let salarioBruto;
let adicNoturno;
let horasExtras;
let descontos;

let horasExtrasValor;
let total;


salarioBruto = leia.questionInt("\nDigite o valor do seu salario bruto: ");
adicNoturno = leia.questionInt("\nDigite o valor do seu adicional noturno: ");
horasExtras = leia.questionInt("\nDigite seu total de horas extras: ");
descontos = leia.questionInt("\nDigite o valor dos seus descontos: ");

horasExtrasValor = horasExtras * 5;
total = salarioBruto + adicNoturno + horasExtrasValor - descontos;

console.log("Seu salário liquido é: " + total.toFixed(1));
