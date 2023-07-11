import {
  closePopUp,
  handleClosePopupWithEsc,
  openPopup,
} from "../../src/utils/utils.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", handleClosePopupWithEsc);
  }

  close() {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", handleClosePopupWithEsc);
  }

  _handleEscClose() {
    if (e.key === "Escape") {
      const openPopup = document.querySelector(".popup_opened");
      closePopUp(openPopup);
    }
  }

  // function closePopUpOnRemoteClick(e) {
  //   if (e.target.classList.contains("popup_opened")) {
  //     closePopUp(e.target);
  //   }
  // }

  setEventListeners() {
    profileCloseButton.addEventListener("click", () => {
      closePopUp(profileEditPopup);
    });

    viewCardCloseButton.addEventListener("click", () => {
      closePopUp(viewCardImagePopup);
    });
  }
}
