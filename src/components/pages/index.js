import "../pages/index.css";
import Card from "../Card.js";
import FormValidator from "../FormValidator.js";
import { handleClosePopupWithEsc, cardsConfig } from "../../utils/utils.js";
import Section from "../Section.js";
import PopupWithForm from "../PopupWithForm.js";
import PopupWithImage from "../PopupWithImage.js";
import UserInfo from "../UserInfo.js";
import {
  initialCards,
  cardsWrap,
  profileEditPopup,
  addCardPopup,
  profileEditForm,
  addCardForm,
  viewCardImagePopup,
  profileEditButton,
  profileCloseButton,
  profileTitle,
  profileDescription,
  cardListEl,
  addCardButton,
  addCardCloseButton,
  addCardTitle,
  addCardImageLink,
  viewCardImage,
  viewCardImageCaption,
  viewCardCloseButton,
  profileTitleInput,
  profileDescriptionInput,
  cardTitleInput,
  cardFormInputs,
  cardFormSubmitButton,
  settings,
  editForm,
  addForm,
} from "../constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Cards                                     */
/* -------------------------------------------------------------------------- */
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", (name, link) => {
    viewImagePopup.open({ name, link });
  });
  return card.getView();
}

const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = renderCard(cardData);
    section.addItem(card);
  },
});
section.renderItems();

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */
export const editFormValidator = new FormValidator(settings, editForm);
export const addFormValidator = new FormValidator(settings, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                               PopupWithImage                               */
/* -------------------------------------------------------------------------- */

const viewImagePopup = new PopupWithImage("#view-image-popup");
viewImagePopup.setEventListeners();

/* ------------------------------------------------------------------------------- */
/*                                PopupWithForm                                    */
/* ------------------------------------------------------------------------------- */

//edit profile popup
const editProfilePopup = new PopupWithForm("#profile-edit-popup", () => {
  handleProfileEditSubmit;
});

editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const user = UserInfo.getUserInfo();
  userName.value = user.name;
  userDescription.value = user.job;
  editProfilePopup.open();
  // profileTitleInput.value = profileTitle.textContent;
  // profileDescriptionInput.value = profileDescription.textContent;
  // editProfilePopup.open();
  // handleProfileEditSubmit();
});

const handleProfileEditSubmit = (inputValues) => {
  e.preventDefault();
  profileTitle.textContent = input.name.value;
  profileDescription.textContent = input.link.value;
  editProfilePopup.close();
};

//add card popup

const handleAddCardFormSubmit = (inputValues) => {
  const card = renderCard(inputValues);
  section.additem(card);
  newCardPopup.close();
  addFormValidator.toggleButtonState(
    cardFormInputs,
    cardFormSubmitButton,
    settings
  );
};

const newCardPopup = new PopupWithForm(
  "#add-card-popup",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();
});

/* ------------------------------------------------------------------------ */
/*                                 User Info                                */
/* ------------------------------------------------------------------------ */
const userInfo = new UserInfo({
  userName: ".profile__title",
  userDescription: ".profile__description",
});
