// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], 
//используя методы массивов сделайте следующее:

'use strict'

// 1. forEach - выведите в консоль все числа, делящиеся без остатка на 3    // 30

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]

array_task.forEach(a => {
	if (a % 3 === 0) {
		console.log(a)
	}
})

//2. map - создайте новый массив, в котором из каждого элемента изначального массива
// вычли длину начального массива 
// [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

const new_array = array_task.map(a => a - array_task.length)
console.log(new_array)

//3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
// [8, 30, 85, 95, 94]

const filtered_array = array_task.filter(
	(a, index, array) => a > array[index - 1]
)
console.log(filtered_array)


//4. find - найдите элемент, равный своему индексу //2

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
const foundElement = array_task.find((a, i) => a === i)
console.log(foundElement)

// 5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
// [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
const sortedArray = [...array_task].sort((a, b) => a - b)
console.log(array_task)
console.log(sortedArray)

// 6. reduce - получите сумму всех чисел массива //466

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
const sumOfNumbers = array_task.reduce((result, a) => result + a, 0)
console.log(sumOfNumbers)

// 7. some - проверьте, есть ли в массиве элементы больше 90 //true

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
const isMoreThan90 = array_task.some(a => a > 90)
console.log(isMoreThan90)

// 8. every - проверьте, что все элементы массива двухзначные //false

const array_task = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
const b = array_task.every(b => b.length === 2)
console.log(b)
