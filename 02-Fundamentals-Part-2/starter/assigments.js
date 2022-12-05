`use strict`

//    ------------------ assigment #1 ------------------   //

// console.log(`assigment #1 `)
// console.log(`\n`)

// const calcAverage = (score1, score2, score3) =>
// (score1 + score2 + score3) / 3;

// function checkWiner(avgDolhins, avgKoalas) {

//     if (avgDolhins / 2 > avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)

//     } else if (avgKoalas / 2 > avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`)

//     } else {
//         console.log(`No WINER`)
//         console.log(`score is ${avgDolhins} vs ${avgKoalas}`)
//     }
// }

// // const scoreDolphins = calcAverage(85, 54, 41);
// // const scoreKoalas = calcAverage(23, 34, 27);
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);


// checkWiner(scoreDolphins, scoreKoalas);

//    --------------------------------------------------   //


//    ------------------ assigment #2 ------------------   //
// console.log(`assigment #2 `)
// console.log(`\n`)

// const tips = [];
// const total = [];
// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ?
//         bill * 0.15 : bill * 0.2;
//     tips.push(tip);
//     total.push(bill + tip);
//     console.log(`The bill was ${bill}, tip was ${tip} and the total value is ${bill + tip}`);

// }
// const bills = [125, 555, 44];

// calcTip(bills[0]);
// console.log(tips[0]);
// console.log(total[0]);

// calcTip(bills[1]);
// console.log(tips[1]);
// console.log(total[1]);

// calcTip(bills[2]);
// console.log(tips[2]);
// console.log(total[2]);

//    --------------------------------------------------   //

//    ------------------ assigment #3 ------------------   //

// console.log(`assigment #3 `)
// console.log(`\n`)

// const marks = {
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
// function higherBMI(one, two) {
//     if (one.calcBMI() > two.calcBMI()) {
//         console.log(`${one.fullName}'s BMI (${one.bmi}) is higher than ${two.fullName}'s (${two.bmi})!`)
//     } else {
//         console.log(`${two.fullName}'s BMI (${two.bmi}) is higher than ${one.fullName}'s (${one.bmi})!`)
//     }
// }

// higherBMI(marks, john)

//    --------------------------------------------------   //
//    ------------------ assigment #4 ------------------   //

console.log(`assigment #4 `)
console.log(`\n`)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let average;

function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ?
        bill * 0.15 : bill * 0.2;

    tips.push(tip)
    totals.push(bill + tip)
}
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    average = sum / arr.length;
    return console.log(`Average bill's is ${average}`);
}

// caling functions
for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}
calcAverage(totals);























//    --------------------------------------------------   //