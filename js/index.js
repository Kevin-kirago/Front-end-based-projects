const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("mail");
const passCode = document.getElementById("password");
const form = document.querySelector(".form");

form.addEventListener("submit", submitForm);

function changePlaceholder() {
	email.placeholder = "email@example.com";
	email.classList.add("mail");
}

function showErr() {
	document.querySelectorAll(".err-icon").forEach(el => el.classList.add("show-err"));
	document.querySelectorAll(".err-msg").forEach(el => el.classList.add("show-err"));
	document.querySelectorAll(".form__input").forEach(el => {
		el.classList.toggle("show-border");
		if (!el[2]) {
			el.placeholder = "";
		}
	});
}

function submitForm(e) {
	if (email.value.length !== 0 && email.validity.valid) {
		console.log("valid");
	} else {
		email.value = "";
		showErr();
		changePlaceholder();
	}

	e.preventDefault();
}
