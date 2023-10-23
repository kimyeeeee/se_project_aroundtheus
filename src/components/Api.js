import Card from "./Card.js";
import UserInfo from "./UserInfo.js";

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

  addNewCard({ name, link }) {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard(id) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(this._handleResponse);
  }

  addingLike(id) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${id}/likes`,
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then(this._handleResponse);
  }

  updateProfilePicture(avatar) {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar,
        }),
      }
    ).then(this._handleResponse);
  }
}
