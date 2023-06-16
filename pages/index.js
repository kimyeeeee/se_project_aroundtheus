import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  handleClosePopupWithEsc,
  closePopUpOnRemoteClick,
  openPopup,
  closePopUp,
} from "../utils/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoice National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

/* -------------------------------------------------------------------------- */
/*                                  templates                                  */
/* -------------------------------------------------------------------------- */
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
const cardsWrap = document.querySelector(".cards__list");
const profileEditPopup = document.querySelector("#profile-edit-popup");
const addCardPopup = document.querySelector("#add-card-popup");
const profileEditForm = profileEditPopup.querySelector("#edit-profile-form");
const addCardForm = addCardPopup.querySelector("#add-card-form");
const viewCardImagePopup = document.querySelector("#view-image-popup");

/* -------------------------------------------------------------------------- */
/*                       // Buttons and other DOM nodes                       */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = profileEditPopup.querySelector(
  "#editprofile-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardListEl = document.querySelector(".cards__list");
const addCardButton = document.querySelector("#add-button");
const addCardCloseButton = addCardPopup.querySelector("#addcard-close-button");
const addCardTitle = document.querySelector(".popup__title");
const addCardImageLink = document.querySelector(".popup__image-link");
const viewCardImage = viewCardImagePopup.querySelector(".popup__image-view");
const viewCardImageCaption = document.querySelector(".popup__image-caption");
const viewCardCloseButton = viewCardImagePopup.querySelector(
  "#viewimage-close-button"
);

/* -------------------------------------------------------------------------- */
/*                                // Form Data                                */
/* -------------------------------------------------------------------------- */
const profileTitleInput = document.querySelector(".popup__input_type_name");
const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description"
);
const cardTitleInput = addCardForm.querySelector(".popup__input_type_title");
const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");
const cardFormInputs = [cardTitleInput, cardUrlInput];
const cardFormSubmitButton = addCardForm.querySelector(".popup__save-button");

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const editForm = document.querySelector("#edit-profile-form");
const addForm = document.querySelector("#add-card-form");
const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);

/* -------------------------------------------------------------------------- */
/*                                // Functions                                */
/* -------------------------------------------------------------------------- */

function renderCard(cardData, container) {
  const card = new Card(cardData, "#card-template");
  container.prepend(card.getView());
}

// Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditPopup);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closePopUp(addCardPopup);
  addCardForm.reset();
  addFormValidator.toggleButtonState(
    cardFormInputs,
    cardFormSubmitButton,
    settings
  );
}

// Event Listeners

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});

// Form listeners

profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditPopup);
});

addCardButton.addEventListener("click", () => {
  openPopup(addCardPopup);
  addFormValidator.toggleButtonState();
});

addCardCloseButton.addEventListener("click", () => {
  closePopUp(addCardPopup);
});

viewCardCloseButton.addEventListener("click", () => {
  closePopUp(viewCardImagePopup);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

profileEditPopup.addEventListener("mousedown", closePopUpOnRemoteClick);
addCardPopup.addEventListener("mousedown", closePopUpOnRemoteClick);
viewCardImagePopup.addEventListener("mousedown", closePopUpOnRemoteClick);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
