var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var numerals = '0123456789';
var specialChars = '!@#$%^&*()~_-+=;:,<>/?';
var passChars = document.getElementById("passCharInput");

function generatePass() {
    event.preventDefault();
    var passLength = passChars.value;
    var criteriaArray = criteria();
    console.log(criteriaArray);
    var randomString = '';
    if (passLength > 7 && passLength < 129) {
        for (var i = 0; i < passLength; i++) {
            randomString += criteriaArray[(Math.floor(Math.random() * criteriaArray.length))];
            document.querySelector("#password").textContent = randomString;
        }
        return randomString;
    } else {
        alert("Password must be between 8 and 128 characters.")
    }
}

function criteria() {
    var upperCase = document.getElementById('uppercase');
    var lowerCase = document.getElementById('lowercase');
    var nums = document.getElementById('numbers');
    var specChars = document.getElementById('special');
    criteriaString = "";

    if (upperCase.checked) {
        criteriaString += alphaUpper;
    }
    if (lowerCase.checked) {
        criteriaString += alphaLower;
    }
    if (nums.checked) {
        criteriaString += numerals;
    }
    if (specChars.checked) {
        criteriaString += specialChars;
    }
    if (upperCase.checked === false && lowerCase.checked === false && nums.checked === false && specChars.checked === false) {
        alert("You have to pick at least one criteria.");
        throw new Error("You have to pick at least one criteria.");
    }

    return criteriaString;
}

function copyPass() {
    event.preventDefault();
    var passText = document.getElementById("password");
    passText.select();
    passText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

document.getElementById("copy").addEventListener("click", copyPass);

document.getElementById("generate").addEventListener("click", generatePass);

// console.log(generatePass(), 'hi');

