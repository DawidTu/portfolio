let passwordBox = document.getElementById("password");
const lenght = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];

	while (lenght > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}
	passwordBox.value = password;
}
//  Coppied text
function copyPassword() {
	if (passwordBox.value.trim() === '') {
        alert('Error: Pole musí byť vyplnené');
        return; 
    }

	if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(function() {
                console.log('Text bol úspešne skopírovaný');
                alert('Text bol úspešne skopírovaný');
            })
            .catch(function(err) {
                console.error('Text sa nepodarilo skopírovať', err);
            });
    } else {
        console.error('Text sa nepodarilo skopírovať');
    }
}


