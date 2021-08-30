'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literls
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////////////////////////////
// MAPS: ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); 

//Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
if(typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt(`Your answer`));
console.log(answer);

answer === question.get('correct')? console.log(question.get(true)) : console.log(question.get(false));

// COnverting map to array

console.log([...question]);

/*
///////////////////////////////////////////////////////////////////
// MAPS: FUNDAMENTALS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
console.log( rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

/*///////////////////////////////////////////////////////////////////
// SETS
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Bojana'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// use of sets example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

/*///////////////////////////////////////////////////////////////////
// LOOPING OBJECTS

// Property NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*///////////////////////////////////////////////////////////////////
//   optional chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisoto?.(0.1) ?? 'Method does not exist');

//Array
const users = [
  { name: 'Jonas', email: 'hello@jonas.io' },
];

console.log(users[0]?.name ?? 'Users array empty');
*/

/*///////////////////////////////////////////////////////////////////
// Arrays for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//getting the element and its index
for (const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
}
*/

/*///////////////////////////////////////////////////////////////////
// OR and AND operators
console.log('----- OR --------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // first way (not recommended)
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // recommended way
console.log(guests2);
console.log(1 || 'Hi' || true || 'Bojana');

console.log('----- AND --------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas' );

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish coalescing operator
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullishh values: null and undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*///////////////////////////////////////////////////////////////////
 // REST PATTERN

 // 1) Destructoring
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(5, 3, 6, 4);
add(5, 8, 7, 9, 6, 1, 3, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cheese', 'mashrooms', 'olives', 'spinch');

restaurant.orderPizza('mashrooms')
*/

/*///////////////////////////////////////////////////////////////////
// SPREAD OPERATOR

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Bojana';
const letters = [...str, '', 'K.'];
console.log(letters);

//real example
// const ingrediants = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?")
// ];

// console.log(ingrediants);

// restaurant.orderPasta(...ingrediants);

// object example

const newReataurant = {foundedIn: 1998 ,...restaurant, founder: 'Guiseppe' };
console.log(newReataurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*///////////////////////////////////////////////////////////////////
// DESTRUCTORING OBJECTS

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2, 
});

restourant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,

})

const {name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//setting default value in case the object doesn't have that property
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
console.log(a, b, 'before mutating value');

const obj = { a: 23, b: 7, c: 14 };

// { a, b } = obj; //gives error

({ a, b } = obj);
console.log(a, b);

// nested objects destructuring

const { fri: {open, close} } = openingHours;
console.log(open, close);
*/

/*///////////////////////////////////////////////////////////////////
// DESTRUCTORING ARRAYS

const arr = [1, 2, 3];

const [x, y, z] = arr;  //destructuring array
console.log(x, y, z);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main]; //switching the values using destructoring
console.log(main, secondary);

//receive two return values from function
const [starter, mainMeal] = restaurant.order(2, 0);
console.log(starter, mainMeal);

*/
