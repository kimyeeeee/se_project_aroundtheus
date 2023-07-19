// //   Open & Close PopUps

const handleClosePopupWithEsc = (e) => {
  if (e.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    this.close(openPopup);
  }
};

const cardsConfig = {
  containerSelector: ".cards__list",
  cardTemplateSelector: "#card-template",
};

export { handleClosePopupWithEsc, cardsConfig };
