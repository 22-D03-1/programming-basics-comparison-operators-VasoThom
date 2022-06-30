let apples = "Äpfel";
apples = 20;
let oranges = "Orangen";
oranges = 30;
console.log({ aufgabe1: apples === oranges });
console.log({ aufgabe2: apples !== oranges });
console.log({ aufgabe3: apples > oranges });
console.log({ aufgabe4: apples <= oranges });
console.log({ aufgabe5: oranges > apples });
//6
let mangoes = 5;
const multiplieren = mangoes * apples;
const addieren = mangoes + oranges;
console.log({ aufgabe6: multiplieren > addieren });
//7
const minus = apples - mangoes;
const div = oranges / mangoes;
console.log({ aufgabe7: minus < div });

//8
console.log({ aufgabe8: mangoes === apples && mangoes === oranges });
//9
const div1 = apples % mangoes;
const div2 = oranges % mangoes;
console.log({ aufgabe9: div1 === div2 });
//10
const add = mangoes + apples;
const add1 = oranges - mangoes;
console.log({ aufgabe10: add >= add1 });
