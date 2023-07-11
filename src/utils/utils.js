//   Open & Close PopUps

function closePopUp(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupWithEsc);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupWithEsc);
}

function closePopUpOnRemoteClick(e) {
  if (e.target.classList.contains("popup_opened")) {
    closePopUp(e.target);
  }
}

const handleClosePopupWithEsc = (e) => {
  if (e.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopUp(openPopup);
  }
};

const cardsConfig = {
  containerSelector: ".cards__list",
  cardTemplateSelector: "#card-template",
};

export {
  handleClosePopupWithEsc,
  closePopUpOnRemoteClick,
  openPopup,
  closePopUp,
  cardsConfig,
};
