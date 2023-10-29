import { popupSaveButton } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSaveButton = this._popupElement.querySelector(
      ".popup__save-button"
    );
    this._popupSaveButtonText = this._popupSaveButton.textContent;
  }

  close() {
    this._popupSaveButton.removeEventListener("click", this._handleFormSubmit);
    super.close();
  }

  setSubmitAction(fn) {
    this._handleFormSubmit = fn;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSaveButton.addEventListener("click", this._handleFormSubmit);
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._popupSaveButton.textContent = loadingText;
    } else {
      this._popupSaveButton.textContent = this._popupSaveButtonText;
    }
  }
}
