import Popup from "./Popup.js";
import { popupSaveButton } from "../utils/constants.js";
import Api from "./Api.js";

export default class Card {
  // constructor({ name, link }, cardSelector, handleCardClick) {
  constructor({
    cardData,
    cardSelector,
    isLiked,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
  }) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._isLiked = cardData.isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  getId() {
    return this._id;
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
        this._handleLikeClick(this._id);
      });

    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this);
      });

    this._cardImageEl.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  handleDeleteCard() {
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

    this._handleViewCardImage();

    this._setEventListeners();

    return this._cardElement;
  }

  // isLiked() {
  //   return this._isLiked;
  // }
}
