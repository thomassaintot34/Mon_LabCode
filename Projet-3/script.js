const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const pseudoInput = document.getElementById('pseudoInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');

const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,}$/;
const pseudoRegex = /^[a-zA-Z0-9_-]{3,}$/;
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:\s*\d{2}){4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const validerChamp = (regex, valeur) => regex.test(valeur);
const validerConfirmation = () => confirmPasswordInput.value === passwordInput.value && passwordInput.value !== '';

const gererValidationInput = (inputElement, regex) => {
    inputElement.addEventListener('input', () => {
        const valeur = inputElement.value;
        validerChamp(regex, valeur)
            ? (inputElement.classList.remove('inputError'), inputElement.classList.add('inputSuccess'))
            : inputElement.classList.remove('inputSuccess');
    });

    inputElement.addEventListener('blur', () => {
        const valeur = inputElement.value;
        (valeur !== '' && !validerChamp(regex, valeur)) && inputElement.classList.add('inputError');
    });
};

gererValidationInput(firstNameInput, nameRegex);
gererValidationInput(lastNameInput, nameRegex);
gererValidationInput(pseudoInput, pseudoRegex);
gererValidationInput(phoneInput, phoneRegex);
gererValidationInput(emailInput, emailRegex);
gererValidationInput(passwordInput, passwordRegex);

confirmPasswordInput.addEventListener('input', () => {
    validerConfirmation()
        ? (confirmPasswordInput.classList.remove('inputError'), confirmPasswordInput.classList.add('inputSuccess'))
        : (confirmPasswordInput.classList.remove('inputSuccess'), confirmPasswordInput.classList.add('inputError'));
});

confirmPasswordInput.addEventListener('blur', () => {
    const valeur = confirmPasswordInput.value;
    (valeur !== '' && !validerConfirmation()) && confirmPasswordInput.classList.add('inputError');
});