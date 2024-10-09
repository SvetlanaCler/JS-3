// 1. Написать функцию, которая принимает на вход слово и проверяет, 
// является ли это слово палиндромом

'use strict';

let num = 1;
function justFun() {
    console.log(`\n================= ${num} таска внутри таски  =================\n`)
    num++;
}

justFun();
function palindrom(word) {
    let a = word.toLowerCase();
    for (let i = 0; i <= a.length/2; i++) {
        if (a[i] !== a[a.length - i - 1]) {
         return false;

       }
   } 
   return true;
}
console.log('Четное количество символов, это палиндром - ' + palindrom('abccba'));
console.log('Нечетное количество символов, это палиндром - ' + palindrom('rlNPnLr'));
console.log('Нечетное количество символов, это не палиндром - ' + palindrom('rlNgnLk'));
console.log('Четное количество символов, это не палиндром - ' + palindrom('lasdcFDDFcdsap'));

// const X = "jhhgjh";
// if (X.toString().split("").reverse().join("") == X.toString()) {
//     console.log("Это палиндром")
// } else {
//     console.log("Это не палиндром")
// }

// X.toString () — преобразовали число в строку
// split ("") — разбивает строку на массив из символов
// В кавычках - пустота - разделение по каждому из символов
// reverse () — меняет элементы в массиве в обратном порядке
// join ("") — добавляет результат к пустой строке, чтобы на выходе получить строку 
// в обратном порядке

// 2. Написать функцию, которая принимает предложение (слова, разделенные только пробелами) 
// в качестве параметра и возвращает слово с наибольшим количеством букв. 
//  Если таких слов несколько - возвращает их все

justFun();
function countN(sentence) {
 const arraySentence = sentence.split(' ');
 let words = [];
 let max = 0;
 for (let word of arraySentence) {
     if (word.length > max) {
         max = word.length;
         words = [word];
     } else if (word.length == max) {
       words.push(word);
     } 
 }
 return words;
}
console.log(countN('она идет по лужам'));