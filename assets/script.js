

// variables //
var number = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacter = ['!','@','#','$','%','^','&','*'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passwordLength = "";
var confirmNumber;
var confirmSpecialCharacter;
var confirmLowerCaseLetters;
var confirmUpperCaseLetters;
//function used to generate prompts for password criteria//
function generatePassword() {
  var password = alert("Please create a secure password");
  var password = alert('Your password needs to contain at least 8 characters');
  var password = alert('Your password must be a mixture of both uppercase and lowercase letters');
  var password = alert('Your password must contain at least one special character, eg., !@#?');
  var passwordLength = prompt ('How many characters will your password contain?');
  

  if (passwordLength < 8) {
    alert('Password must contain at least 8 characters');
  } else if (passwordLength > 128) {
    alert('Password cannot contain more than 128 characters');
  }
    else {
    alert('Please contine');
  }
//confirm questions for numbers, special characters and upper/lower case letters//
  var confirmNumber = confirm('Please confirm your password will contain a number');
  var confirmSpecialCharacter = confirm('Please confirm your password will contain atleast one special character');
  var confirmLowerCaseLetters = confirm('Please confirm your password will contain lowercase letters');
  var confirmUpperCaseLetters = confirm('Please confirm your password will contain uppercase letters');

  var results = [];

//join multiple pieces of information from the above arrays//
 if (confirmNumber) {
  results = results.concat(number)
 }
 if (confirmSpecialCharacter) {
  results = results.concat(specialCharacter)
 }
 if (confirmLowerCaseLetters) {
  results = results.concat(lowerCaseLetters)
 }
 if (confirmUpperCaseLetters) {
  results = results.concat(upperCaseLetters)
 }
//Create loop that will select criteria from the above arrays that will be randomly chosen in the password//
var criteria = [];

for (var i = 0; i < passwordLength; i++) {
  criteria = criteria + results[Math.floor(Math.random() * results.length)];
  }
return criteria;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
