// Assignment Code
/* The Following will explain the steps of the code intention:

Button the generate password on the page document.
  
Prompts after click

PromptPasswordLengthInput = "Choose a password length, Minumum of 8 and Maximum of 128"  
(PasswordLength)= Password length user input
If passwordLength < 8 or >128 return prompt:error and request user to try again
  Do Until passwordLength >8 and less than 128


Build an arrary for userInputs [Length,PromptPasswordUpperInput, PromptPasswordLowerInput, PromptPasswordSpecialCharacter]

Function : Call prompts

function callPrompts
  PromptPasswordUpperInput = "Include at least 1 uppercase ?"
  PromptPasswordLowerInput = "Include at least 1 lower case letter?"
  PromptPasswordSpecialCharacter = "Include at least 1 special character?"

  returns userInputs[Length,PromptPasswordUpperInput, PromptPasswordLowerInput, PromptPasswordSpecialCharacter]

  Function : minCharacterRequirements () 
    loops through each userInputs position and evaluates response
    returns minCharacters required as a string


  
    funtion: remainingCharacters()
    loops through the response input
    then creates a single array based on input by
      loops through the length of the remaining password length
        creates a string utilizing the remaningString
    returns remainingPassword as a string
  
    Function generatePassword (minCharacterRequirements,remainingCharacters)
    combines minCharacters + remainingPassword
    shuffles the string
    returns password


    

  PromptPasswordUpperInput = "Include at least 1 uppercase ?"
upperCaseRequiredInput = yes/no
  If yes
    Add to array at least 1 uppercase letter
  If no
    Do nothing

 PromptPasswordLowerInput = "Include at least 1 lower case letter?"
 lowerCaseRequiredInput = yes/no
  if yes
    add to array at least 1 lower case letter
  if no
    do nothing

PromptPasswordSpecialCharacter = "Include at least 1 special character?"
 specialCharacterInput = yes/no
  if yes
    add to array at least 1 special character
  if no
    do nothing

  For remaining characters 



*/
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var numberList = ["0","1","2","3","4","5","6","7","8","9","0"];
  var specialCharacterList=["~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","|","<",">","?","/"];
  var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCaseList=[];
  var requiredCharacters = [];

  // The following for loop will create an upper case arrary
  for (var i=0;i<lowerCaseList.length;i++){
  upperCaseList[i]=lowerCaseList[i].toUpperCase();
}


  var userInputLength = window.prompt("Choose a password length, Minumum of 8 and Maximum of 128.");
  var inputLength= parseInt(userInputLength)

  if (isNaN(inputLength)){
    window.alert ("Please input a number, try again.");
    generatePassword();
  }

  if (inputLength <8 || inputLength > 128){
    window.alert ("Password length must be greater than 8 and smaller than 128.")
    generatePassword();
  }

var inputNumbersRequirement = window.confirm("Ok, Yes I want at least 1 number. Cancel, no I do not want numbers.")
var inputSpecialCharacters = window.confirm("Ok, I want at least 1 special characters, Cancel , I do not want special characters.")
var inputUpperCase = window.confirm("Ok, I want upper case. Cancel , I do not want upper case.")
var inputLowerCase = window.confirm("Ok, i want lower case. Cancel, I do not want lower case.")
// Write password to the #password input
var inputArray=[inputLength,inputNumbersRequirement , inputSpecialCharacters,inputUpperCase, inputLowerCase]
console.log (inputArray[0])

// The following is to create array of required characters 
var reqText= "";


 //First is for inputNumbersRequirement
  if (inputArray[1] === true){
    var randNumber= numberList[Math.floor(Math.random()*numberList.length)];
    console.log("number is : "+ randNumber);
    reqText +=  randNumber ;
  } 
  if (inputArray[2] === true){
    var specialCharacter= specialCharacterList[Math.floor(Math.random()*specialCharacterList.length)];
    console.log("special character is : " + specialCharacter);
    reqText +=  specialCharacter ;
  }
  if (inputArray[3] === true){
    var upperCaseCharacter= upperCaseList[Math.floor(Math.random()*upperCaseList.length)];
    console.log("upper case character is : " + upperCaseCharacter);
    reqText +=  upperCaseCharacter ;
  }
  if (inputArray[4] === true){
    var lowerCaseCharacter= lowerCaseList[Math.floor(Math.random()*lowerCaseList.length)];
    console.log("upper case character is : " + lowerCaseCharacter);
    reqText +=  lowerCaseCharacter;
  }
  console.log("password required text is : " +reqText)
  console.log("remaining length is :"+ (inputLength -reqText.length));
var remainingListLength= (inputLength -reqText.length);

console.log(remainingListLength)
  // now i will take the remaining and using the answers ill create 1 string then later pull from there randomly

  var remainingList="";

  if (inputArray[1] === true){
    for (let i =0; i<numberList.length;i++){
      remainingList= remainingList.concat(numberList[i]);
    }
  } 
  if (inputArray[2] === true){
    for (let i =0; i<specialCharacterList.length;i++){
      remainingList= remainingList.concat(specialCharacterList[i]);
    }
  }
  if (inputArray[3] === true){
    for (let i =0; i<upperCaseList.length;i++){
      remainingList= remainingList.concat(upperCaseList[i]);
    }
  }
  if (inputArray[4] === true){
    for (let i =0; i<lowerCaseList.length;i++){
      remainingList= remainingList.concat(lowerCaseList[i]);
    }
  }
  if(inputArray[1]===false && inputArray[2]===false && inputArray[3]===false && inputArray[4]===false){
    window.alert ("You have to select at least (1) source of characters, please try again.");
    generatePassword();
  }

// the remianingList will be a string developed due to the selection
console.log(remainingList);
var remainingString="";

for(i=0;i<remainingListLength;i++){
var randCharacterRemaining = remainingList[Math.floor(Math.random()*remainingList.length)];
remainingString += randCharacterRemaining;

}
console.log(remainingString)

var passwordFirst = reqText + remainingString
console.log(passwordFirst)

// Now i want to increase security so i will shuffle

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array
  
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}
var password= "";
password= shuffle(passwordFirst);
console.log("shuffled password is : " + password);

//
return password;

}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
