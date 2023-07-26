import Popup from "./Popup.js";

export default class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._viewImage = document.querySelector(".popup__image-view");
    this._viewImageCaption = document.querySelector(".popup__image-caption");
  }

  open({ name, link }) {
    this._viewImage.alt = name;
    this._viewImageCaption.textContent = name;
    this._viewImage.src = link;
    super.open();
  }
}
