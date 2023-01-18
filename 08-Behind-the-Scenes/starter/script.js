'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       const firstName = 'Stevan';
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //  console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Nikola';
// calcAge(1992);

// const nameE = 'Djura';
// if (nameE === 'Djura') {
//   console.log(`Djura is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'programer bre';
//   //   console.log(x);
// }

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Nikola';
// let job = 'programer';
// const year = 1992;

// //Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// // Example
// console.log(numProducts);
// if (!numProducts) {
//   deleteShoppingCart();
// }
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//------------- this keyword ---------//

// console.log(this);
/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};

// calcAge(1992);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};

// calcAgeArrow(1980);

const nikola = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

nikola.calcAge();

const marija = {
  year: 2017,
};
console.log(marija);
marija.calcAge = nikola.calcAge;
console.log(marija);
// console.log(nikola.calcAge);
marija.calcAge();
// console.log(marija.calcAge);

const f = nikola.calcAge;
f();
*/

//------------- Regular Functions vs. Arrow Functions ---------//

// var firstName = 'Matilda';
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution I
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution II

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(addArrow(2, 5, 8));
*/
//
//
//
//
//
//
//------------------------------------------------------------//
//----------Primitives vs. Objects (Primitive vs. Reference Types)-------------//

//
// //
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me: ', me);
//
//
//
//
//
//
//
//
//
//
//----------------Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// // console.log(oldLastName, lastName);

// //----------------Refference types
// const jessica = {
//   firsName: 'Jessica',
//   lastName: 'Wiliams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marrige: ', jessica);
// console.log('After marrige: ', marriedJessica);
// marriedJessica = {};
// console.log(jessica.firsName);
// console.log(marriedJessica.firsName);
//

//--------------------Coping object

const jessica2 = {
  firsName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
  family: ['Allice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marrige: ', jessica2);
console.log('After marrige: ', jessicaCopy);
