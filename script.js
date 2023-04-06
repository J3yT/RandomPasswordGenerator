// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numbers = [0,1,2,3,4,5,6,7,8,9]
let special = [ '!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[']

let builtArray = []

function generatePassword(){

  if(confirm("Do you want your password to contain lowercase letters?")) {

    builtArray = [...lowerAlphabet, ...builtArray]
  }

  if(confirm("Do you want your password to contain uppercase letters")) {

    builtArray = [...upperAlphabet, ...builtArray]
  }

  if(confirm("Do you want your password to contain numbers")){

    builtArray = [...numbers, ... builtArray]
  }

  if(confirm("Do you want your password to contain special characters")){

    builtArray = [...special, ...builtArray]

  }

  
  let passwordLength =prompt("how long do you want the password")

  let password = "";
  
  for (let i = 0; i < passwordLength; i++) {

    let index = Math.floor(Math.random()*builtArray.length)
    password += builtArray[index];

  }

  return password;

}

let generatedLetterIndex = Math.floor(Math.random()*129)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
