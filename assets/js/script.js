//Query Selectors 
const displayPassword = $("#generated-password");
const passwordLength = $("#length");
const upperCaseInput = $("#uppercase");
const lowerCaseInput = $("#lowercase");
const numbersInput = $("#numbers");
const specialInput = $("#special");

//Function that generate Password 
const generatePassword = () => {

    //Variables for uppercase, lower, numbers, or special characters 
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = upperCase.toLowerCase();
    const numbers = "1234567890";
    const specials = "#$%&()*+,-./:;<=>?";
    const characters = "";
    const password = "";

    //Check to see if the user want to include uppercase 
    if ("upperCaseInput:checked") characters += upperCase;

    //Check to see if the user want to include lowercase 
    if ("lowerCaseInput:checked") characters += lowerCase;

    //Check to see if the user want to include numbers 
    if ("numbersInput:checked") characters += numbers;

    //Check to see if the user want to include special characters 
    if ("specialInput:checked") characters += specials;

    return characters;
};