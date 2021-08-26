'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({starterIndex = 0, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }
};

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





/*
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