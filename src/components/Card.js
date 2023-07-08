import { openPopup } from "../utils/utils.js";

const imageViewPopup = document.querySelector("#view-image-popup");

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardImageEl.addEventListener("click", () => {
      imageViewPopup.querySelector(".popup__image-view").src = this._link;
      imageViewPopup.querySelector(".popup__image-view").alt = this._name;
      imageViewPopup.querySelector(".popup__image-caption").textContent =
        this._name;
      openPopup(imageViewPopup);
    });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleViewCardImage() {
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;
  }

  getView() {
    this._cardElement = this._getTemplate();

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    //get the card view
    this._handleViewCardImage();
    // this._viewCardImagePopup();
    //set event listeners
    this._setEventListeners();
    //return the card
    return this._cardElement;
  }
}
