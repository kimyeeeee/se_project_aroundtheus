export default class FormValidator {
  constructor(settings, formElement) {
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this.errorClass);
  }

  _hideInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this.inputErrorClass);
    errorMessageEl.textContent = ``;
    errorMessageEl.classList.remove(this.errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _hasInvalidInput(inputEls) {
    return !inputEls.every((inputEl) => inputEl.validity.valid);
  }

  _disableButton() {
    this.submitButtonSelector.classList.add(this.inactiveButtonClass);
    this.submitButtonSelector.disabled = true;
  }

  _enableButton() {
    this.submitButton.classList.remove(this.inactiveButtonClass);
    this.submitButton.disabled = false;
  }

  _toggleButtonState(inputEls) {
    if (this._hasInvalidInput(this.inputEls)) {
      this._disableButton(this.submitButtonSelector);
    } else this._enableButton(this.submitButtonSelector);
  }

  _setEventListeners() {
    this._toggleButtonState();
    this.inputEls = [...this.form.querySelectorAll(this._inputSelector)];
    this.submitButton = this.form.querySelector(this._submitButtonSelector);

    this.inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl, this.submitButton);
        this._toggleButtonState(inputEls, this.submitButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners(this._form);
  }
}
