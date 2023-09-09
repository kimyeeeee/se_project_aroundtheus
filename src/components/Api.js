import Card from "./Card.js";

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  editProfile() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }

  addNewCard() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards ", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: this._name,
        link: this._link,
      }),
    });
  }
}
