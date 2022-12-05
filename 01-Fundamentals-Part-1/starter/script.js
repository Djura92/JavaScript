/*let js = "amaizing"
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Nikola";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variabe name convension
let josnas_matilda = "JM"
let $finction = 27

let person = "jonas"
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher"

let job1 = "Coder"
let job2 = "Teacher"

console.log(myFirstJob)
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun)

//console.log(typeof true)
console.log(typeof javascriptIsFun)
//console.log(typeof 23)
//console.log(typeof "jonas")

javascriptIsFun = "YES"

console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 1992;

console.log(year)
console.log(typeof year)

console.log(typeof null)
*/

/*
let age = 30;
age = 31;

const birthYear = 1992;
//birthYear = 1999;

//const jov;

console.log(birthYear)

*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = "Nikola"
const lastName = "Djuraskovic"

console.log(firstName + " " + lastName)



let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;

console.log(x);

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

*/

/*
let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);

*/




/*
let bmiMark;
let bmiJohn;

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

bmiMark = markMass / markHeight ** 2;
bmiJohn = johnMass / johnHeight ** 2;
console.log(bmiMark)
console.log(bmiJohn)

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI)
/////////////
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

bmiMark = markMass / markHeight ** 2;
bmiJohn = johnMass / johnHeight ** 2;
console.log(bmiMark)
console.log(bmiJohn)

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI)
*/
/*
const age = 15;

if (age >= 18) {
    console.log("Sara can start driving licence");
} else {
    const yearsLeft = 18 - age;
    // console.log(`Sarah is to young. Wait another  ${yearsLeft} years:)`)
}*/

/*
let js = 'amaizing';
if (js === 'amaizing') alert('JavaScript is FUN');
console.log(40 + 8 + 23 - 10);*/

// 5 falsy values: 0, '' undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
}

let height = 123;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/


/*
const age = 18;

if (age === 18) console.log('You yust became an adult :D (strict)');

if (age == 18) console.log('You yust became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number??"));

console.log(favorite);

console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amaizing number!');
} else if (favorite === 7) {
    console.log('7 is also cool number')
} else if (favorite === 9) {
    console.log('9 is also cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) {
    console.log('Why not 23?');
}
*/

/*

const hasDriverLicence = true; // A
const hasGoodVision = true;     // B


console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

if (hasDriverLicence && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else hould drive . . .')
}

const isTired = false; // C
console.log(hasDriverLicence && hasGoodVision && isTired)


if (hasDriverLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else hould drive . . .')
}

*/





/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}


*/

/*

const day = 'sunday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code exmples');
        break;
    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log('Not a valid day!');

}*/


// TERNARY IF ELSE 


const age = 30;
/*
age >= 18 ? console.log('I like to dring wine ') :
    console.log('I like to dring water ');*/

const drink = age >= 18 ? 'wine' : 'water';

console.log(`I like to drink ${drink}`);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);



/*And, so that means that we will learn the basics

of functions, objects, arrays, and also loops.*/