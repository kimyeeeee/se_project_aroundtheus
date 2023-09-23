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
    this._popupSaveButton.removeEventListener();
    super.close();
  }

  //   _handleDelteCard() {
  //     const deleteCardPopup = document.querySelector("#delete-card-popup");
  //     deleteCardPopup.classList.add("popup_opened");
  //     // 1) delete card from the DOM; 2) send the request to delete the card

  //     popupSaveButton.addEventListener("submit", () => {
  //       this._cardElement.remove();
  //     });
  //   }

  setSubmitAction(fn) {
    this._handleFormSubmit = fn;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSaveButton.addEventListener("click", this._handleFormSubmit);
  }
}

//bring back close but remove event listener instead of resetting it.
