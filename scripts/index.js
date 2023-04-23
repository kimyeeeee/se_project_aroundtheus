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

// Elements

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditPopup = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditPopup.querySelector(
  "#modal-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector(".modal__title");
const profileDescriptionInput = document.querySelector(".modal__description");
const profileEditForm = profileEditPopup.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const addCardButton = document.querySelector("#add-button");
const addCardPopup = document.querySelector("#add-card-popup");
const addCardCloseButton = addCardPopup.querySelector("#modal-close-button");
const addCardTitle = document.querySelector(".modal__title");
const addCardImageLink = document.querySelector(".modal__image-link");
const addCardForm = document.querySelector("#add-card-form");

// Functions

function closePopUp(popup) {
  popup.classList.remove("modal_opened");
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  // add event listner for like button
  const likeButtons = cardElement.querySelectorAll(".card__like-button");

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });
  });
  // add event listner for delete
  // cardEl.remove();

  // add event listner image
  // open popup
  // find image element inside popup

  // replace src with card link
  // replace src with card link

  return cardElement;
}

function renderCard(cardElement, container) {
  container.prepend(cardElement);
}

// Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditPopup);
}

// Event Listeners

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});
profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditPopup);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});
addCardCloseButton.addEventListener("click", () => {
  closePopUp(addCardPopup);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardElement({
    name,
    link,
  });
  renderCard(cardView, cardListEl);
  closePopUp(addCardPopup);
});
initialCards.forEach(function (cardData) {
  const cardView = getCardElement(cardData);
  getCardElement(cardView, cardListEl);
});
