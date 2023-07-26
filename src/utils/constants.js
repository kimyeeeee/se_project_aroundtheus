export const initialCards = [
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

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
export const cardsWrap = document.querySelector(".cards__list");
export const profileEditPopup = document.querySelector("#profile-edit-popup");
export const addCardPopup = document.querySelector("#add-card-popup");
export const profileEditForm =
  profileEditPopup.querySelector("#edit-profile-form");
export const addCardForm = addCardPopup.querySelector("#add-card-form");
export const viewCardImagePopup = document.querySelector("#view-image-popup");

/* -------------------------------------------------------------------------- */
/*                       // Buttons and other DOM nodes                       */
/* -------------------------------------------------------------------------- */
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileCloseButton = profileEditPopup.querySelector(
  "#editprofile-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const cardListEl = document.querySelector(".cards__list");
export const addCardButton = document.querySelector("#add-button");
export const addCardCloseButton = addCardPopup.querySelector(
  "#addcard-close-button"
);
export const addCardTitle = document.querySelector(".popup__title");
export const addCardImageLink = document.querySelector(".popup__image-link");
export const viewCardImage =
  viewCardImagePopup.querySelector(".popup__image-view");
export const viewCardImageCaption = document.querySelector(
  ".popup__image-caption"
);
export const viewCardCloseButton = viewCardImagePopup.querySelector(
  "#viewimage-close-button"
);

/* -------------------------------------------------------------------------- */
/*                                // Form Data                                */
/* -------------------------------------------------------------------------- */
export const profileTitleInput = document.querySelector(
  ".popup__input_type_name"
);
export const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description"
);
export const cardTitleInput = addCardForm.querySelector(
  ".popup__input_type_title"
);
export const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");
export const cardFormInputs = [cardTitleInput, cardUrlInput];
export const cardFormSubmitButton = addCardForm.querySelector(
  ".popup__save-button"
);

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const editForm = document.querySelector("#edit-profile-form");
export const addForm = document.querySelector("#add-card-form");

export const cardsConfig = {
  containerSelector: ".cards__list",
  cardTemplateSelector: "#card-template",
};

// const handleClosePopupWithEsc = (e) => {
//     if (e.key === "Escape") {
//       const openPopup = document.querySelector(".popup_opened");
//       this.close(openPopup);
//     }
//   };
