const form = document.querySelector('#form');

const errorIcon = document.querySelector('.errorIcon');
const errorInput = document.querySelector('.errorInput');
const successInput = document.querySelector('.successInput');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.querySelector('#email');
    const emailVal = document.querySelector('#email').value;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailRegex.test(emailVal)) {
        console.log("Valid email");
        email.style.border = "3px solid rgb(8, 191, 8)";
        errorIcon.classList.add('d-none');
        errorInput.classList.add('d-none');

        successInput.classList.remove('d-none');

    } else {

        email.style.border = "3px solid var(--soft-red)";

        errorIcon.classList.remove('d-none');
        errorInput.classList.remove('d-none');
        successInput.classList.add('d-none');
    }


})