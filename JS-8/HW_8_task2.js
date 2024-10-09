 
//   Напишите функцию, которая принимает на вход массив слов и возвращает 
// отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
  
'use strict'

const words = [
	'umbrella',
	'apple',
	'ocean',
	'independent',
	'education',
	'elephant',
	'island',
	'universe',
	'environment',
	'queue',
];

function countVowels(word) {
	const vowels = 'eyuioa'
	return [...word].filter(char => vowels.includes(char)).length
}

const sortedArrayOfWords = [...words].sort(
	(a, b) => countVowels(a) - countVowels(b)
)

console.log(sortedArrayOfWords)