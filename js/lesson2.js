"use strict"
function getAge() {
    let yourAge = +prompt("How old are you?");
    if (yourAge < 12) {
        alert(`You are a child`);
    } else if (12 <= yourAge && yourAge <= 18) {
        alert(`You are a teenager`);
    } else if (18 <= yourAge && yourAge < 60) {
        alert(`You are an adult`);
    } else if (60 <= yourAge) {
        alert(`You are a pensioner`);
    }
};

function getSymbol() {
    let symbolNumber = +prompt("Enter a number between 0 and 9");
    if (symbolNumber == 0) {
        alert(`0-)`);
    } else if (symbolNumber === 1) {
        alert(`1-!`);
    } else if (symbolNumber === 2) {
        alert(`2-@`);
    } else if (symbolNumber === 3) {
        alert(`3-#`);
    } else if (symbolNumber === 4) {
        alert(`4-$`);
    } else if (symbolNumber === 5) {
        alert(`5-%`);
    } else if (symbolNumber === 6) {
        alert(`6-^`);
    } else if (symbolNumber === 7) {
        alert(`7-&`);
    } else if (symbolNumber === 8) {
        alert(`8-*`);
    } else if (symbolNumber === 9) {
        alert(`9-(`);
    } else alert(`Enter a single digit`);
};

function getIdentialNumbers() {
    let getNumber = +prompt("What is three-digit number do you want to verify?");
    let a = (Math.trunc(getNumber / 100));
    let b = (Math.trunc((getNumber - a * 100) / 10));
    let c = (getNumber - a * 100 - b * 10);
    if (a === b || a === c || b === c) {
        alert(`There are the same numbers in this number`);
    } else alert(`There are no identical numbers`);
};

function getIdentialNumbers2() {
    let getNumber = +prompt("What is three-digit number do you want to verify?");
    let str = String(getNumber)
    let a = str[0];
    let b = str[1];
    let c = str[2];
    if (a === b || a === c || b === c) {
        alert(`There are the same numbers in this number`);
    } else alert(`There are no identical numbers`);
};

function getLeapYear() {
    let getYear = +prompt("Enter the year which you want to check for a leap year");


    if (getYear % 400 === 0 || getYear % 4 === 0 && getYear % 100 != 0) {
        alert(`This is a leap year`);
    } else alert(`There is a not a leap year`);
};

function getNumberCheck() {
    let getNumber = +prompt("Enter a five-digit number to check?");
    let str = String(getNumber);
    let strLength = str.length;
    let a = str[0];
    let b = str[1];
    let d = str[3];
    let e = str[4];
    if (strLength != 5) {
        alert(`This is an incorrect number`);
    } else if (a === e && b === d) {
        alert(`This number is a palyndrome`);
    } else alert(`This number is a not palyndrome`);
};

function exchDollar() {
    let cursEUR = 0.86;
    let cursUAH = 26.17;
    let cursAZN = 1.7;
    let howDollars = +prompt("How many dollars do you want to convert?");
    let currencyConvert = prompt("In what currency(EUR, UAH, AZN) do you want to convert dollars?");
    let currency = String(currencyConvert);
    if (currency === 'EUR') {
        alert(`You have ${cursEUR * howDollars} EUR`);
    } else if (currency === 'UAH') {
        alert(`You have ${cursUAH * howDollars} UAH`);
    } else if (currency === 'AZN') {
        alert(`You have ${cursAZN * howDollars} AZN`);
    } else alert(`Enter the correct currency for the exchange`);
};

function getAmount() {
    let howDollars = +prompt("What is the amount of your purchase?");
    if (howDollars < 200 && howDollars > 0) {
        alert(`You have to pay ${howDollars} USD`);
    } else if (howDollars >= 200 && howDollars < 300) {
        alert(`You have to pay ${howDollars * 0.97} USD`);
    } else if (howDollars >= 300 && howDollars < 500) {
        alert(`You have to pay ${howDollars * 0.95} USD`);
    } else if (howDollars >= 500) {
        alert(`You have to pay ${howDollars * 0.93} USD`);
    } else alert(`Enter the correct purchase amount`);
};

function getCircle() {
    let lengthCircle = +prompt("What is the length of the circle?");
    let perimeterSquare = +prompt("What is the perimeter of the square?");
    let diameterCircle = lengthCircle / (Math.PI)
    let sideSquare = perimeterSquare / 4
    if (diameterCircle <= sideSquare) {
        alert(`The circle is placed in a square`);
    } else alert(`The circle is not placed in a square`);
};

function getResultTest() {
    let capitalUkr = prompt("What is the capital of Ukraine (Kyiv, Lviv, Ivano-Frankivsk)?");
    let capitalGB = prompt("What a capital of Great Britain  (Kyiv, London, Liverpool)?");
    let capitalNL = prompt("What is the capital of the Netherlands  (Paris, London, Amsterdam)?");
    let scores = 0;

    if (capitalUkr === "Kyiv") {
        scores = 2;
    } else scores = 0;

    if (capitalGB === "London") {
        scores = scores + 2;
    } else scores = scores + 0;

    if (capitalNL === "Amsterdam") {
        scores = scores + 2;
    } else scores = scores + 0;

    alert(`Your scores is ${scores}`)

};
