import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this.popupSaveButton = this._popupElement.querySelector(
      ".popup__save-button"
    );
    this.popupSaveButtonText = this.popupSaveButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._popupForm.querySelectorAll(".popup__input").forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    // this.renderLoading();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this.popupSaveButton.textContent = loadingText;
    } else {
      this.popupSaveButton.textContent = this.popupSaveButtonText;
    }
  }
}
