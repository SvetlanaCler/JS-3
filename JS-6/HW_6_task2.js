// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который 
// будет проверять ваш набор названий пицц (массив) 
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). 
// Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

'use strict';

const competitorPizzas = ["Peperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai"];
// const myPizzas = ["peperoni", "margarita", "chicken", "vegetables","seafood" ];
const myPizzas = ["Peperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai"];
const extraPizza = [];

for (let i = 0; i < myPizzas.length; i++) {
    myPizzas[i] = myPizzas[i].toUpperCase();
}
for (let i = 0; i < competitorPizzas.length; i++) {
    competitorPizzas[i] = competitorPizzas[i].toUpperCase();
}

for (const pizza of myPizzas) {
    if (!competitorPizzas.includes(pizza)) {
        extraPizza.push(pizza);
    }
}

if (extraPizza.length !== 0 ){
    console.log(extraPizza);
}else{
    console.log(null);
}    