'use strict';

const characters = [
  { 'name': 'Barney', 'age': 36 },
  { 'name': 'Fred', 'age': 40 },
  { 'name': 'Jack', 'age': 50 }
];


// 1. Напишите функцию addCharacter(character), позволяющую добавить новый объект 
// в массив characters. 
//     Объект должен иметь поля name (string) и age (number)


function addCharacter(character) {
    if(character.hasOwnProperty('name') && character.hasOwnProperty('age') && typeof character.name === 'string' && typeof character.age === 'number') {
      characters.push(character);
    } else {
    console.log('Error.The object must contain field name (string) and field age (number)');
    }
}

addCharacter({ name: 'Anna', age: 17});
console.log(characters);


// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name) {
    const foundCharacter = characters.find((character) => character.name == name); 
    if (foundCharacter) {
      return foundCharacter;
    }else{
      console.log(`Персонаж с именем ${name} не найден.`);
    };
};

// console.log(getCharacter('Fred')); 


// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей
// НЕ МЛАДШЕ minAge 
// getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
    return characters.filter((character) => character.age >= minAge);
};

console.log(getCharactersByAge(40)); // [ { name: 'Fred', age: 40 }, { name: 'Jack', age: 50 } ]


// 4. Напишите функцию updateCharacter(name, newCharacter). 
// (Методом getCharacter(name) получаем ссылку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(name, newCharacter){
  const character = getCharacter(name);
  if(character){
    character.name = newCharacter.name
    character.age = newCharacter.age
}
else {
  console.log(`Персонаж с именем ${name} не найден.`);
}
return characters
}

console.log(updateCharacter('Korney', {name: 'KATE', age: 6}));


// =====
// const student = [1,2,3];
// student.splice(1);
// console.log(student);
// student.splice(0,2,4); // 4,3
// console.log(student);

// =====

//5. Напишите функцию для удаления персонажа removeCharacter(name) 
//(Реализовать через splice, индекс персонажа искать методом findIndex)
//splice() -изменяет массив, удаляя определённое количество элементов и/или добавляя новые элементы,
// начиная с указанного индекса

function removeCharacter(name){
  const getCharacter = characters.findIndex(character => character.name === name);
  characters.splice(getCharacter,3);
  return characters;
  };
  console.log(removeCharacter('Jack'));


