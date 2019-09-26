var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~_-+=;:,<>/?';

function generatePass() {
    var passChars = document.getElementById("passCharInput").value;
    var randomString = '';
    for (var i =0; i < passChars;i++) {
        randomString += characters[(Math.floor(Math.random()*characters.length))];
        console.log(randomString);
    }
    return randomString;
}

document.getElementById("generate").addEventListener("click", generatePass);

// console.log(generatePass(), 'hi');

