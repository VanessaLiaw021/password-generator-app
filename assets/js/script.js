//Query Selectors 
const displayPassword = document.querySelector("#generated-password");
const toggleSwitch = document.querySelector(".toggle-checkbox");
const displayError = document.querySelector("#error-message");
const generateBtn = document.querySelector("#generate-btn");
let lengthInput = document.querySelector("#length");
let upperCaseInput = document.querySelector("#uppercase");
let lowerCaseInput = document.querySelector("#lowercase");
let numbersInput = document.querySelector("#numbers");
let specialInput = document.querySelector("#special");


//Event listener that generate a password when clicked 
generateBtn.addEventListener("click", () => {

    //Variables to generate password 
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = uppercase.toLowerCase();
    const numbers = "0123456789";
    const special = "#$%&()*+,-./:;<=>?";
    let characters = "";
    let password = "";

    //Store the user inputs in an object
    const storeInputs = {
        lengthResult: lengthInput.value,
        uppercaseResult: upperCaseInput.checked,
        lowercaseResult: lowerCaseInput.checked,
        numbersResult: numbersInput.checked,
        specialResult: specialInput.checked
    };

    //Validate that user can only allow length 8 - 30
    if (storeInputs.lengthResult < 8 || storeInputs.lengthResult > 30) {
        displayError.textContent = "Length need to be between 8-30";
    } else {
        displayError.textContent = "";
    }

    //Validate that at least one checkbox is checked
    if (!storeInputs.uppercaseResult && !storeInputs.lowercaseResult && !storeInputs.numbersResult && !storeInputs.specialResult) {
        displayError.textContent = "At least one checkbox need to be checked";
    } else {
        displayError.textContent = "";
    }

    //If uppercase is checked, add to characters
    if (storeInputs.uppercaseResult) characters += uppercase;

    //If lowercase is checked, add to characters
    if (storeInputs.lowercaseResult) characters += lowercase;

    //If number is checked, add to characters
    if (storeInputs.numbersResult) characters += numbers;

    //If special is checked, add to characters
    if (storeInputs.specialResult) characters += special;

    //Loop throught the length on the characters 
    for (let i = 0; i < storeInputs.lengthResult; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    //Display the password generated 
    displayPassword.textContent = password;
});