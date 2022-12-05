// 'use strict';
//    ------------------  ------------------   //
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive :D');
*/
//const interface = 'Audio';
// const private = 123;
//const if = 23;


//    ------------------ create FUNCTION ------------------   //

/*
function logger() {
    console.log(`My name is Jonas`);
}


// CALLING // RUNNING // INVOKING FUNCTION
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


*/


//    ------------------FUNCTION DECLARATION------------------   //
//    ------------------ vs EXPRESSIONS ------------------   //

/*
// FUNCTION DECLARATION

function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1992);


// FUNCTION EXPRESSIONS

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1992);

console.log(age1, age2);

*/

// ----------------------------------------------------------------//

//    ------------------ARROW FUNCTION------------------   //


// const calcAge3 = birthYear => 2022 - birthYear;
// console.log(calcAge3(1992));


// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2022 - birthYear;
//     // return 65 - age;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement('Djura', 1992));
// console.log(yearsUntilRetirement('Bob', 1980));

// ----------------------------------------------------------------//

//    ------------------ FUNCTIONS CALLING OTHER FUNCTIONS ------------------   //


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// ----------------------------------------------------------------//

//    ------------------ REVIEWING FUNCTIONS ------------------   //


// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (firstName, birthYear) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired :D`)
//         return -1;
//     }
// }
// yearsUntilRetirement('Djura', 1992);
// yearsUntilRetirement('Bob', 1950);


// ----------------------------------------------------------------//

//    ------------------ assigment ------------------   //
//    ------------------ course way ------------------   //

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWiner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphin win (${avgDolhins} vs ${avgKoalas})`);

//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);

//     } else {
//         console.log(`No team wins. . .`)

//     }
// }

// checkWiner(scoreDolphins, scoreKoalas);

// checkWiner(576, 111);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWiner(scoreDolphins, scoreKoalas);

// ----------------------------------------------------------------//

//    ------------------ INTRODUCTION TO ARRAYS ------------------   //

// const friend1 = `Michael`
// const friend2 = `Steven`
// const friend3 = `Peter`

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// // REPLACE ARRAY
// friends[2] = `Jay`;
// console.log(friends);
// /*
// // cant do
// // friends = [`bob`, `alice`];
// */
// const firstName = `Jonas`;
// const jonas = [firstName,
//     `Schmedtman`,
//     2022 - 1991,
//     `teacher`,
//     friends];

// console.log(jonas);
// console.log(jonas.length);

// // Exercise

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1990,
//     1967,
//     2002,
//     2018
// ];

// // console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//     years[0],
//     years[1],
//     years[years.length - 1]
//];

// ----------------------------------------------------------------//

//    ------------------ BASIC ARRAY METHODS ------------------   //
//    ------------------ PUSH ------------------   //

// const friends = [
//     `Michael`,
//     `Steven`,
//     `Peter`
// ];
// /* ADD LAST ELEMENT */

// friends.push(`Jay`);
// console.log(friends);

// /* ADD FIRST ELEMENT */

// friends.unshift(`John`);
// console.log(friends);

// /* REMOVE last ELEMENT */
// friends.pop();
// console.log(`Removed LAST from array`, friends.pop());
// console.log(friends);

// /* REMOVE FIRST ELEMENT */
// console.log(`Removed FIRST from array`, friends.shift());
// console.log(friends);

// /* FIND IN ARRAY WITH ELEMENT FROM ARRAY */
// console.log(friends.indexOf(`Steven`));
// console.log(friends.indexOf(`Bob`));

// /* FIND IN ARRAY TRUE OR FALS */
// console.log(friends.includes(`Steven`));
// console.log(friends.includes(`Bob`));
// friends.push(23);
// console.log(friends.includes(23));

// const firstName = `Steven`

// if (friends.includes(firstName)) {
//     console.log(`You have a friend called ${firstName}`)

// } else {
//     console.log(`You DONT have a friend called ${firstName}`)

//}

// ----------------------------------------------------------------//

//    ------------------ assigment ------------------   //
//    ------------------ course way ------------------   //


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// }
// const bills = [125, 555, 44];

// const tips =
//     [calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
//     ];
// const totals =
//     [bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2],
//     ]

// console.log(bills, tips, totals);

// ----------------------------------------------------------------//

//    ------------------ OBJECTS ------------------   //

// const nikolaArray = [
//     `Nikola`,
//     `Djuraskovic`,
//     2022 - 1992,
//     `student`
//     [`Pera`,
//     `Mika`,
//     `Zika`
//     ]
// ]
// /* LITERAL OBJECT */
// const nikola = {
//     firstName: `Nikola`,
//     lastName: `Djuraskovic`,
//     age: 2022 - 1992,
//     job: `Student`,
//     friends: [`Pera`, `Mika`, `Zika`]
// }

// console.log(nikola)

// console.log(nikola.lastName)
// console.log(nikola[`lastName`])

// const nameKey = `Name`;
// console.log(nikola[`first` + nameKey])
// console.log(nikola[`last` + nameKey])

// const interestedIn = prompt(`What do wou want to know about Nikola? Choice between firstName, lastName, age, job and friends`)

// console.log(interestedIn)
// if (nikola[interestedIn]) {
//     console.log(nikola[interestedIn]);

// } else {
//     console.log(`Wrong request!`)

// }
// nikola.location = `Serbia`
// nikola[`twitter`] = `@DjuraDjura`
// console.log(nikola);


// //Chalenge
// //``
// console.log(`${nikola.firstName} has ${nikola.friends.length} friends, and his best friend called ${nikola.friends[0]}`);


// ----------------------------------------------------------------//


//    ------------------ OBJECT METHODS ------------------   //


// const jonas = {
//     firstName: `Jonas`,
//     lastName: `Schmedtman`,
//     birthYear: 1991,
//     job: `Teacher`,
//     jriends: [`Michael`, `Peter`, `Steven`],
//     hasDriverLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicence ? `a` : `no`} driver licence.`;
//     }
// };
// console.log(jonas.calcAge());

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);

// // console.log(jonas[`calcAge`](1991));

// // Chalenge //
// // ``Jonas is a 46-yar old teacher, and he has a drivers licence``

// console.log(jonas.getSummary());

// ----------------------------------------------------------------//

//    ------------------ assigments ------------------   //
//    ------------------ course way ------------------   //

// const mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// ----------------------------------------------------------------//

//    ------------------ FOR LOOP ------------------   //

// console.log(`Lifring weights repetition 1`);
// console.log(`Lifring weights repetition 2`);
// console.log(`Lifring weights repetition 3`);
// console.log(`Lifring weights repetition 4`);
// console.log(`Lifring weights repetition 5`);
// console.log(`Lifring weights repetition 6`);
// console.log(`Lifring weights repetition 7`);
// console.log(`Lifring weights repetition 8`);
// console.log(`Lifring weights repetition 9`);
// console.log(`Lifring weights repetition 10`);

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifring weights repetition ${rep}`);
//}


// ----------------------------------------------------------------//

//    ------------------ LOOPING ARRAYS ------------------   //

// const types = [];

// const jonas = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [
//         `Michael`,
//         `Peter`,
//         `Steven`
//     ]
// ];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], `--------`, typeof jonas[i]);
//     //  types[i] = typeof jonas[i]; //-------Filling types array

//     types.push(typeof jonas[i]);

// };

// for (let i = 0; i < types.length; i++) {
//     console.log(types[i]);
// };

// console.log(types);

// const years = [
//     1991,
//     2007,
//     1969,
//     2020,
//     2022
// ]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
//  console.log(ages)

//

//    ------------------ BREAK, CONTINUE ------------------   //


// const types = [];

// const jonas = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [
//         `Michael`,
//         `Peter`,
//         `Steven`
//     ]
// ];

// console.log(`--- ALL ARRAY WITHOUT CONTINUE --- `)
// for (let i = 0; i < jonas.length; i++) {

//     console.log(jonas[i], typeof jonas[i])
// }

// console.log(`\n`)
// console.log(`--- ONLY STRINGS --- `)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i])
// }

// console.log(`\n`)
// console.log(`--- BREAK WITH NUMBER ---`)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i])
// }

// ----------------------------------------------------------------//

//    ------------------ LOOP in LOOP ------------------   //

// const jonas = [
//     `Jonas`,
//     `Schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [
//         `Michael`,
//         `Peter`,
//         `Steven`
//     ]
// ];

// console.log(`--- REVERSE LOOP ---`)
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i])
// }

// console.log(`\n`)
// console.log(`--- LOOP in LOOP ---`)

// for (let exercise = 1; exercise < 6; exercise++) {
//     console.log(`*******Starting exercise ${exercise}`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`)
//     }
// }

// ----------------------------------------------------------------//

//    ------------------ WHILE LOOP ------------------   //

// let rep = 1;
// console.log(`--- WHILE LOOP ---`)

// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repettition ${rep}`)
//     rep++
// }

// console.log(`\n--- RANDOM NUMBER --- `)

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6) console.log(`Loop is about to end . . .`)
// }

// ----------------------------------------------------------------//

//    ------------------ assigments ------------------   //
//    ------------------ course way ------------------   //


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(`TEST`, calcAverage([2, 3, 7]));
// console.log(`TOTAL avg`, calcAverage(totals));
// console.log(`TIPS avg`, calcAverage(tips));

// ----------------------------------------------------------------//