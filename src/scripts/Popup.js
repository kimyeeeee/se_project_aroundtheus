import { closePopUp, handleClosePopupWithEsc, openPopup } from "../utils/utils";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    openPopup();
  }

  close() {
    closePopUp();
  }

  _handleEscClose() {
    handleClosePopupWithEsc();
  }

  setEventListeners() {
    // sets event listeners
  }
}
