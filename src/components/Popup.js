export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupElementCloseButton =
      this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose() {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElementCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", () => {
      if (e.target.classList.contains("popup_opened")) {
        this.close(e.target);
      }
    });
    // viewCardCloseButton.addEventListener("click", () => {
    //   closePopup(viewCardImagePopup);
    // });

    // addCardCloseButton.addEventListener("click", () => {
    //   closePopup(addCardPopup);
    // });

    // addCardPopup.addEventListener("mousedown", this._closePopUpOnRemoteClick);
    // viewCardImagePopup.addEventListener("mousedown", closePopUpOnRemoteClick);
  }
}
