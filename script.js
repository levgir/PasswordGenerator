var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var numerals = '0123456789';
var specialChars = '!@#$%^&*()~_-+=;:,<>/?';
var passChars = document.getElementById("passCharInput");
// var passwordText = document.getElementById("password");

function generatePass() {
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
        alert("Your password must be at least 8 characters and no more than 128 long.")
    }
}

function criteria() {
    var inputElements = document.getElementsByClassName('criteriaCheckbox');
    console.log(inputElements);
    var criteriaString = "";
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            var checkValue = inputElements[i].value;
            console.log(checkValue);
            if (checkValue === "uppercase") {
                criteriaString += alphaUpper;
            }else if (checkValue === "lowercase") {
                criteriaString += alphaLower;
            }else if (checkValue === "numbers") {
                criteriaString += numerals;
            }else if (checkValue === "special") {
                criteriaString += specialChars;
            }else{
                alert("You have to pick at least one criteria.")
            }
        }
        return criteriaString;
    }
}

function copyPass() {
    var passText = document.getElementById("password");
    passText.select();
    passText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

document.getElementById("copy").addEventListener("click", copyPass);

document.getElementById("generate").addEventListener("click", generatePass);

// console.log(generatePass(), 'hi');

