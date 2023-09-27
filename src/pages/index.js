import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
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
} from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

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
  // const card = new Card(cardData, "#card-template", (name, link) => {
  //   viewImagePopup.open({ name, link });
  // });
  const card = new Card({
    cardData,
    cardSelector: "#card-template",
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    handleDeleteClick,
  });

  return card.getView();
}

function handleCardClick(name, link) {
  viewImagePopup.open({ name, link });
}
/* ------------------------ delete card confirmation ------------------------ */

const deleteCardConfirmation = new PopupWithConfirmation("#delete-card-popup");

function handleDeleteClick(card) {
  deleteCardConfirmation.open();
  deleteCardConfirmation.setSubmitAction(() => {
    const id = this.getId();
    api.deleteCard(id).then(() => {
      deleteCardConfirmation.close();
      this.handleDeleteCard();
    });
  });
  deleteCardConfirmation.setEventListeners();
}
/* ------------------------------- like button ------------------------------ */

function handleLikeClick(id) {
  // this._handleLikeIcon();
  api.addingLike(id).then(() => {
    this.handleLikeIcon();
  });
}

// function deleteLikeClick(id) {
//   api.deleteLikeClick(id).then(()=> {
//     this.handleLikeIcon();
//   });
// }
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
const handleProfileEditSubmit = (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.about);

  editProfilePopup.close();
};
const editProfilePopup = new PopupWithForm(
  "#profile-edit-popup",
  handleProfileEditSubmit
);

editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const updatedUserInfo = userInfo.getUserInfo();
  profileTitleInput.value = updatedUserInfo.name;
  profileDescriptionInput.value = updatedUserInfo.about;
  editProfilePopup.open();
});

/* ---------------------------- add card popup ---------------------------- */

const handleAddCardFormSubmit = (inputValues) => {
  const card = renderCard(inputValues);
  section.addItem(card);
  newCardPopup.close();
  api.addNewCard(inputValues);
};

const newCardPopup = new PopupWithForm(
  "#add-card-popup",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardPopup.open();
});

/* ------------------------------------------------------------------------ */
/*                                 User Info                                */
/* ------------------------------------------------------------------------ */
const userInfo = new UserInfo({
  userName: ".profile__title",
  userDescription: ".profile__description",
  userPicture: ".profile__pic",
});

/* -------------------------------------------------------------------------- */
/*                                     API                                    */
/* -------------------------------------------------------------------------- */
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "63bd0a97-87e8-4761-93e7-bc9458ee6ee5",
    "Content-Type": "application/json",
  },
});

api.getUserInfo();
let section;
api.getInitialCards().then((cards) => {
  section = new Section({
    items: cards,
    renderer: (cardData) => {
      const card = renderCard(cardData);
      section.addItem(card);
    },
  });
  section.renderItems();

  // api.editProfile();
});
