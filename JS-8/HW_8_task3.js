// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N
// (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4

'use strict'

  function missingArray(params) {
    var arr = [5,2,7,3,8,1,6];
    var missing = []; 
    for (let i = 1; i < arr[arr.length-1]; i++) {
        if(!(arr.includes(i))){
           missing.push(i);
        }
       
    }
    return missing;
}

console.log(missingArray());