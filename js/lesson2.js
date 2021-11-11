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
    } else if (symbolNumber == 1) {
        alert(`1-!`);
    } else if (symbolNumber == 2) {
        alert(`2-@`);
    } else if (symbolNumber == 3) {
        alert(`3-#`);
    } else if (symbolNumber == 4) {
        alert(`4-$`);
    } else if (symbolNumber == 5) {
        alert(`5-%`);
    } else if (symbolNumber == 6) {
        alert(`6-^`);
    } else if (symbolNumber == 7) {
        alert(`7-&`);
    } else if (symbolNumber == 8) {
        alert(`8-*`);
    } else if (symbolNumber == 9) {
        alert(`9-(`);
    } else alert(`Enter a single digit`);
};

function getIdentialNumbers() {
    let getNumber = +prompt("What is three-digit number do you want to verify?");
    let a = (Math.trunc(getNumber / 100));
    let b = (Math.trunc((getNumber - a * 100) / 10));
    let c = (getNumber - a * 100 - b * 10);
    if (a == b || a == c || b == c) {
        alert(`There are the same numbers in this number`);
    } else alert(`There are no identical numbers`);
};

