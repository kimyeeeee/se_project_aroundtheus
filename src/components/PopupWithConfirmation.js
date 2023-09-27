import { popupSaveButton } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._popupForm = this._popupElement.querySelector(".popup__form");
    this._popupSaveButton = this._popupElement.querySelector(
      ".popup__save-button"
    );
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
}
