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
      showInputError(this._form, inputEl, settings);
    } else {
      hideInputError(this._form, inputEl, settings);
    }
  }

  _hasInvalidInput(cardListEl) {
    return !cardListEl.every((inputEl) => inputEl.validity.valid);
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
    if (_hasInvalidInput(inputEls)) {
      _disableButton(this.submitButton);
    } else _enableButton(this.submitButton);
  }

  _setEventListeners() {
    this._toggleButtonState();
    this.inputEls = [...this.form.querySelectorAll(this._inputSelector)];
    this.submitButton = this.form.querySelector(
      this._submitButtonSelectorsubmitButtonSelector
    );

    this.inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this.form, inputEl, settings, submitButton);
        toggleButtonState(inputEls, submitButton, settings);
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
