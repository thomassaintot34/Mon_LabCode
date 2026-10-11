document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    const lastNameInput = document.getElementById("lastNameInput");
    const firstNameInput = document.getElementById("firstNameInput");
    const pseudoInput = document.getElementById("pseudoInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");

    const regexLastName = /^[a-zA-Zà-öø-ÿÀ-ÖØ-ß]{2,}$/;

    const regexFirstName = /^[a-zA-Zà-öø-ÿÀ-ÖØ-ß\s-]+$/;

    const regexPseudo = /^[a-zA-Z0-9_-]{3,}$/;

    const regexPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:\s*\d{2}){4}$/;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    function setInputValidState(input, isValid) {
        if (isValid || input.value.trim() === "") {
            input.style.borderColor = "";
            input.style.boxShadow = "";
        } else {
            input.style.borderColor = "#ff4d4d";
            input.style.boxShadow = "0 0 5px rgba(255, 77, 77, 0.5)";
        }
    }

    lastNameInput.addEventListener("input", () => {
        setInputValidState(lastNameInput, regexLastName.test(lastNameInput.value));
    });

    firstNameInput.addEventListener("input", () => {
        setInputValidState(firstNameInput, regexFirstName.test(firstNameInput.value));
    });

    pseudoInput.addEventListener("input", () => {
        setInputValidState(pseudoInput, regexPseudo.test(pseudoInput.value));
    });

    phoneInput.addEventListener("input", () => {
        setInputValidState(phoneInput, regexPhone.test(phoneInput.value));
    });

    emailInput.addEventListener("input", () => {
        setInputValidState(emailInput, regexEmail.test(emailInput.value));
    });

    passwordInput.addEventListener("input", () => {
        const isValid = regexPassword.test(passwordInput.value);
        setInputValidState(passwordInput, isValid);

        if (confirmPasswordInput.value !== "") {
            const isMatch = confirmPasswordInput.value === passwordInput.value;
            setInputValidState(confirmPasswordInput, isMatch);
        }
    });

    confirmPasswordInput.addEventListener("input", () => {
        const isMatch = confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== "";
        setInputValidState(confirmPasswordInput, isMatch);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const isLastNameValid = regexLastName.test(lastNameInput.value);
        const isFirstNameValid = regexFirstName.test(firstNameInput.value);
        const isPseudoValid = regexPseudo.test(pseudoInput.value);
        const isPhoneValid = regexPhone.test(phoneInput.value);
        const isEmailValid = regexEmail.test(emailInput.value);
        const isPasswordValid = regexPassword.test(passwordInput.value);
        const isConfirmValid = confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== "";

        setInputValidState(lastNameInput, isLastNameValid);
        setInputValidState(firstNameInput, isFirstNameValid);
        setInputValidState(pseudoInput, isPseudoValid);
        setInputValidState(phoneInput, isPhoneValid);
        setInputValidState(emailInput, isEmailValid);
        setInputValidState(passwordInput, isPasswordValid);
        setInputValidState(confirmPasswordInput, isConfirmValid);

        if (
            isLastNameValid &&
            isFirstNameValid &&
            isPseudoValid &&
            isPhoneValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmValid
        ) {
            alert("Formulaire validé avec succès !");
        } else {
            alert("Veuillez vous assurer que tout les champs sont renseignés ou corriger les erreurs signalées dans le formulaire.");
        }
    });
});