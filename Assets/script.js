// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var smallLetters = "abcdefghijklmnopqrstuvwxyz"
var integers = "1234567890"
var specials = "!@#$%^&*()<>?,."
var picked = ""
var chosen = ""
// Write password to the #password input

// Prompts user to select criteria
function writePassword(event) {
  var smallLetters = confirm ("Would you like to use lowercase letters?")
  var bigLetters = confirm ("Would You Like To Use Uppercase Letters?")
  var number = confirm ("Would you like your password to contain numbers?")
  var symbols = confirm ("Would you like to use special characters? (ex:!@#$%^&*)")
  var codeLength = prompt ("Choose a password length between 8 and 128")
  
  if (!smallLetters && !bigLetters && !number && !symbols ){
    alert ("Please choose at least one criteria!")
    // reasks user to input criteria could be revised
    var smallLetters = confirm ("Would you like to use lowercase letters?")
    var bigLetters = confirm ("Would You Like To Use Uppercase Letters?")
    var number = confirm ("Would you like your password to contain numbers?")
    var symbols = confirm ("Would you like to use special characters? (ex:!@#$%^&*)")
  }
  
  if (codeLength <8 || codeLength >128 ) {
    alert ("Please choose a valid length for your password")
    // reasks user to input length criteria
    var codeLength = prompt ("Choose a password length between 8 and 128")
  } else if (codeLength >8 || codeLength <128) {
    // waiting message while password is generated
    alert ("Please wait while we generate your password")
  }
   
  // these if statement compiles all of the chosen criteria into one useable variable
    if (smallLetters) {
      chosen += smallLetters
    }

    if (bigLetters) {
     chosen += bigLetters
    }

    if (number) {
      chosen += integers
    }
      
    if (symbols) {
      chosen += specials
    }

    for (var i = 0; i < codeLength; i++) {
      picked += chosen.charAt(Math.floor(Math.random() * chosen.length))

    }
      
    // sets password content to generated password
   password.textContent = password.value = picked;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 