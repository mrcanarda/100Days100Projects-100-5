const btnLogin = document.querySelector(".button-link");
const inputLoginUsername = document.querySelector(".input--user");
const inputLoginLastname = document.querySelector(".input--lastname");
const inputLoginEmail = document.querySelector(".input--email");
const inputLoginPin = document.querySelector(".input--pin");
const form__right = document.querySelector(".form");
const form__hdn = document.querySelector(".form--zwei");

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputLoginUsername.value === "") {
    form__right.classList.add("hidden");
    form__hdn.classList.remove("hidden");
  }

  if (inputLoginLastname.value === "") {
    form__right.classList.add("hidden");
    form__hdn.classList.remove("hidden");
  }

  if (inputLoginEmail.value === "") {
    form__right.classList.add("hidden");
    form__hdn.classList.remove("hidden");
  }

  if (inputLoginPin.value === "") {
    form__right.classList.add("hidden");
    form__hdn.classList.remove("hidden");
  }
});
