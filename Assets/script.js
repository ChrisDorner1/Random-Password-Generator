// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Write password to the #password input
function writePassword(event) {
  console.log ("button pressed")
  var smallLetters = confirm ("Would you like to use lowercase letters?")
  var bigLetters = confirm ("Would You Like To Use Uppercase Letters?")
  var number = confirm ("Would you like your password to contain numbers?")
  var symbols = confirm ("Would you like to use special characters? (ex:!@#$%^&*)")
  var codeLength = prompt ("Choose a password length between 8 and 128")
  
  if (!smallLetters && !bigLetters && !number && !symbols ){
    alert ("Please choose at least one criteria!")
  } else if (codeLength <8 || codeLength >128 ) {
    alert ("Please choose a valid length for your password")
  }
  // codeLength = prompt ("Choose a number between 8 and 128 for password.")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
// password.value === "";
// var password = "";
// var cC = "";