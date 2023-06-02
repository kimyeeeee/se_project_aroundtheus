import Card from "./Card.js";

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

const card = new Card(cardData, card - template);

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

/* -------------------------------------------------------------------------- */
/*                                // Functions                                */
/* -------------------------------------------------------------------------- */
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupWithEsc);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupWithEsc);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  // const deleteButton = cardElement.querySelector(".card__delete-button");
  // deleteButton.addEventListener("click", () => {
  //   cardElement.remove();
  // });

  function handleViewCardImage(cardData) {
    viewCardImage.src = cardData.link;
    viewCardImage.alt = cardData.name;
    viewCardImageCaption.textContent = cardData.name;
  }
  cardImageEl.addEventListener("click", () => {
    openPopup(viewCardImagePopup);
    handleViewCardImage(cardData);
  });

  return cardElement;
}

function renderCard(cardData, container) {
  const cardElement = getCardElement(cardData);
  container.prepend(cardElement);
}

function closePopUpOnRemoteClick(e) {
  if (e.target.classList.contains("popup_opened")) {
    closePopUp(e.target);
  }
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
  toggleButtonState(cardFormInputs, cardFormSubmitButton, options);
}

const handleClosePopupWithEsc = (e) => {
  if (e.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopUp(openPopup);
  }
};

// Event Listeners

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});
profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditPopup);
});

addCardButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});
addCardCloseButton.addEventListener("click", () => {
  closePopUp(addCardPopup);
});

viewCardCloseButton.addEventListener("click", () => {
  closePopUp(viewCardImagePopup);
});

// Form listeners

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

profileEditPopup.addEventListener("mousedown", closePopUpOnRemoteClick);
addCardPopup.addEventListener("mousedown", closePopUpOnRemoteClick);
viewCardImagePopup.addEventListener("mousedown", closePopUpOnRemoteClick);
