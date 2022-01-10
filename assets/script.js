//DOM ELEMENTS
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var lowercaseEl = document.getElementById("lowercase");
var uppercaseEl = document.getElementById("uppercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

var randomFunc = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
// objects

generateBtn.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.value;
    var hasSymbol = +symbolsEl.checked;

    resultEl = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length);
});

function generatePassword(lowercase, uppercase, number, symbol, length) {

    let generatedPassword = '';

    var typesCount = lowercase + uppercase + number + symbol;
    
    console.log('typesCount: ',typesCount);

    var typesArr = [{lowercase}, {uppercase},{number},{symbol}].filter(
        item => Object.values(item)[0]);
    
    if (typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        
        generatedPassword += randomFunc[funcName]();
        });
    }
    var password = generatedPassword.slice(0, length);
    var passwordText = document.querySelector("#password");
    passwordText.value = password
    return;
}
//functions for generating random characters    
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}
console.log(getRandomLower());

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}
console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
console.log(getRandomNumber());

function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]~?<>"
    return symbols[Math.floor(Math.random()*symbols.length)];
}
console.log(getRandomSymbol());
