'use strict'
// Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants


let str = "lalala";
let cnt = 0; // consonants
let vwl = 0; // vowels
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase(); //charAt() возвращает символ по указанному индексу в строке
    if (char >= 'a' && char <= 'z' && !'aeiou'.includes(char)) {  //ABC
        cnt++;
    } else {
     (char >= 'a' && char <= 'z' && 'aeiou'.includes(char)) // есть ли элемент в массиве/подстрока в строке
        vwl++;
    }
}       
console.log(`Word contains ${vwl} vowels и ${cnt} consonants`);
