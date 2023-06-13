export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  _setEventListeners() {
    //".card__like-button"
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    //".card__delete-button"
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }
  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this.cardElement = null;
  }
  _handleViewCardImage(cardData) {
    this._cardImageEl.src = cardData.link;
    this._cardImageEl.alt = cardData.name;
    this._cardTitleEl.textContent = cardData.name;
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    //get the card view
    this._handleViewCardImage();
    //set event listeners
    this._setEventListeners();
    //return the card
    return this._cardElement;
  }
}
