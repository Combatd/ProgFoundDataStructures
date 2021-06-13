const dinnerChoices = [['Salad', 'Soup', 'Cheese Plate'], ['Chicken', 'Salmon', 'Lasagna']];

let appIndex = 0;
let mainDishIndex = 1;

let firstApp = dinnerChoices[appIndex][0];
let secondApp = dinnerChoices[appIndex][1];
let thirdMainDish = dinnerChoices[mainDishIndex][2];

console.log(firstApp);
console.log(secondApp);
console.log(thirdMainDish);

dinnerChoices[mainDishIndex][0] = 'Steak';
console.log(dinnerChoices[mainDishIndex][0]);

console.log(dinnerChoices);

/*
A multi-dimensional array is an array of arrays.
The type and size of each nested array is the same.
*/