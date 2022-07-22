//Query Selectors 
const displayPassword = document.querySelector("#generated-password");
const toggleSwitch = document.querySelector(".toggle-checkbox");
const generateBtn = document.querySelector("#generate-btn");
const passwordLength = document.querySelector("#length");
const upperCaseInput = document.querySelector("#uppercase");
const lowerCaseInput = document.querySelector("#lowercase");
const numbersInput = document.querySelector("#numbers");
const specialInput = document.querySelector("#special");

//Function that generate the password 
const generatePassword = () => {

    //Variables to generate password 
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = uppercase.toLowerCase();
    const numbers = "0123456789";
    const special = "#$%&()*+,-./:;<=>?";
    let characters = "";
    let password = "";
};

//Event listener that generate a password when clicked 
generateBtn.addEventListener("click", generatePassword());