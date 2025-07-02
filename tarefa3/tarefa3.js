const leia = require('readline-sync');


let salarioBruto;
let adicNoturno;
let horasExtras;
let descontos;

let horasExtrasCalculo;
let total;


salarioBruto = leia.questionInt("\nDigite o valor do seu salario bruto: ");
adicNoturno = leia.questionInt("\nDigite o valor do seu adicional noturno: ");
horasExtras = leia.questionInt("\nDigite seu total de horas extras: ");
descontos = leia.questionInt("\nDigite o valor dos seus descontos: ");

horasExtrasCalculo = horasExtras * 5;
total = salarioBruto + adicNoturno + horasExtrasCalculo - descontos;

console.log("Seu salário liquido é: " + total.toFixed(1));
