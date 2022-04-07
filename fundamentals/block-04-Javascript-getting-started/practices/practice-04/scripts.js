// && - AND
// Practice -01
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
// Practice -02
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

// mini cheat sheet
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Practice - 03
const currentHour = 21;
let message = "";

if (currentHour >= 22) {
  console.log("Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >= 18 && currentHour < 22) {
  console.log("Rango da noite, vamos jantar :D");
}
else if (currentHour >= 14 && currentHour < 18) {
  console.log("Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour >= 11 && currentHour < 14) {
  console.log("Hora do almoço!!!");
}
else if (currentHour >= 4 && currentHour < 11) {
  console.log("Hmmm, cheiro de café recém passado");
}

console.log(message);

// || OR
// Practice - 01
const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

// mini cheat sheet
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Practice - 02
let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descando merecido UwU");
}

// NOT
// Practice - 01
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

// Practice - 02 - Strings
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

// Practice - 03 - Numbers
console.log(!42); // false

console.log(!0); // true
// The number 0 is "false" on javascript. So, the opposite is true.

// Practice - 04 - Null
console.log(!null); // true

// Practice - 05 - Undefined
console.log(!undefined); // true
