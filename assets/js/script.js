//Query Selectors 
const displayPassword = $("#generated-password");
const passwordLength = $("#length");
const upperCaseInput = $("#uppercase");
const lowerCaseInput = $("#lowercase");
const numbersInput = $("#numbers");
const specialInput = $("#special");
const toggleSwitch = $(".toggle-checkbox");
const generateBtn = $("#generate-btn");

//When the page load, stuff should happen
$(document).ready(() => {

    //Event Listener that generate password once meet all user requirement 
    generateBtn.on("click", () => {

        //Variables for uppercase, lower, numbers, or special characters 
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = upperCase.toLowerCase();
        const numbers = "1234567890";
        const specials = "#$%&()*+,-./:;<=>?";
        let characters = "";
        let password = "";

        //Check to see if the user want to include uppercase 
        if (upperCaseInput.is(":checked")) characters += upperCase;

        //Check to see if the user want to include lowercase 
        if (lowerCaseInput.is(":checked")) characters += lowerCase;

        //Check to see if the user want to include numbers 
        if (numbersInput.is(":checked")) characters += numbers;

        //Check to see if the user want to include special characters 
        if (specialInput.is(":checked")) characters += specials;

        //Loop through 
        for (let i = 0; i < passwordLength.value; i++) {

            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        //Display the passowrd 
        displayPassword.value = password;
    });
});