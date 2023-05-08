// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    // const inputSelector = options.inputSelector;
    const inputEls = [...formEl.querySelector(opions.formSelector)];
    inputEls.forEach(inputEl =>
        inputEl.addEventListener('input', () => )
        )
}




function enableValidation(options) {
  const formsEls = [...document.querySelector(opions.formSelector)];
  formsEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
    // look for all inputs insdie of form

    // loop through all the inputs to see if all are valid
    // if input is not valid
    // grab the validation message
    // add error class to input
    // display error message
    // button is disabled
    //if all inputs are valid
    // enable button
    // reset error messages
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelecor: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
