const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("mail");
const passCode = document.getElementById("password");
const form = document.querySelector(".form");
const errIcons = [...document.querySelectorAll(".err-icon")];
const errMessages = [...document.querySelectorAll(".err-msg")];
const inputs = [...document.querySelectorAll(".form__input")];

function changePlaceholder() {
	email.placeholder = "email@example.com";
	email.classList.add("mail");
}

function showErr(iconPosition, errPosition, inputPosition) {
	iconPosition.classList.toggle("show-err");
	errPosition.classList.toggle("show-err");
	inputPosition.classList.toggle("show-border");

	if (inputPosition === inputs[2]) {
		email.value = "";
		inputPosition.placeholder = "";
	}
}

form.addEventListener("submit", e => {
	if (firstName.value.length === 0) {
		showErr(errIcons[0], errMessages[0], inputs[0]);
	}

	if (lastName.value.length === 0) {
		showErr(errIcons[1], errMessages[1], inputs[1]);
	}

	if (email.value.length === 0 && email.validity.valid === true) {
		showErr(errIcons[2], errMessages[2], inputs[2]);
		changePlaceholder();
	}

	if (passCode.value.length <= 0) {
		showErr(errIcons[3], errMessages[3], inputs[3]);
	}
	e.preventDefault();
});
