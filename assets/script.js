// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

//DOM ELEMENTS
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
// Add event listener to generate button
// Write password to the #password input

generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasNumber = numbersEl.value;
    const hasSymbol = +symbolsEl.checked;

    console.loge(hasUpper, hasLower, hasSymbol, hasNumber);
});

resultEl. innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length);

function generatePassword(lower, upper, number, symbol){
    let generatedPassword = '';
    const typesCount = lower, upper, number, symbol;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    console.log('typesCount: ',typesCount);
    const typesArr = [{lowercase}, {uppercase},{number},{symbol}].filter(
        item => Object.values(item)[0]);
    //console.log('typesArr: ', typesArr);
    if(typesCount === 0){
        return '';
    }
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        //console.log('funcName: ', funcName);
        generatedPassword += randomFunc[funcName]();
        });
    }
    document.body.appendChild(textarea);
    window.alert(display.generatedPassword);
}
    
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
    const symbols = "!@#$%^&*(){}[]~?<>"
    return symbols[Math.floor(Math.random()*symbols.length)];
}
console.log(getRandomSymbol());
