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

  // deleteLike(id) {
  //   return fetch(
  //     `https://around-api.en.tripleten-services.com/v1/cards/${id}/likes`,
  //     {
  //       method: "DELETE",
  //       headers: this._headers,
  //     }
  //   ).then(this._handleResponse);
  // }

  updateProfilePicture(cardData) {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar:
          "https://lh3.googleusercontent.com/pw/ADCreHetKTGVUUHr4XWtycXOCctmlPQp7E4ONKbKGi2NA6sDlJJlOVS81MXEDHfEVTsnOcOqdQjyAyP2N1MAJCHtIx5sWSmcWyH9GgYlHqpfoMlJYaTcHzAylsdMIkOOfbyvYQ_5b7Nu1eIiQ5SWNhlOKvGCOxkuT2fCLrVrxhPcw7Gvz56w_NwWY-7Bd-1aBSVh8iLZhqY1_BjEmI0Je0qjtqMqUVCMl24kw926xaP-0NviYmvdKKxL6xLv7WNPMLUx5dxnA9uLGdQEEP9Pa06AklqZtw3Xy81r_dOjOOgF4_eYKoStLmRCMLcoxUvrHDAS81Q0PaCuUT7fTlFxmq8ZT7fZUZ8JQ83_TelIi15MUSf_o3ZtqGgxoPsaZRCGKcblJjOJUQOiJmy_xbE1mLlhNUbNAzpii5nUT3MprTt7HZjjj5kMA_vHxsQuJM-upj2qfaz_MNd_Q2cvkItv5NdxmOb8JHZyHr9LXQ4EqVPyyeh7PzKQ0YT-OyjVU7qyQavMH6YvRy8XpgPB3xlbqQJzH9QGHKYx0BrRt0__zkfS90NqO32xWvjTi_Kyv1XL6gfrJSw23NG-uONdyY307ZWOv-GA__vrs87HpX3rYUo3-eom9bSL5-n3Lnj8tI-nYgUsuWJ0TXWzBu2WxtxWlnT6u6lWtv8zcYRcW5WKFpOlvzQOSgMHl8iFDHRjHxaaq0KyXDPlRguaPP_vUyJ91Vr79RIENqO2SCtDX7SjQ20hCG367w3XDypuhb07yg7mxBTjkBCLa-ei7xNCCKA8W3YU9oDRx8JU9eGcI7F6MXQIThN6CMEHo5mGskDstR4TTO1FWIUazNFC8rqX1F81G3wtfuep8Rkd49LU8Bcx1DvKCc4We3EaF65GpY2NRi0RSMZBVdwfP-Bo_3eImU4kLDAm82mxrY5rIS3lSO1sgwm5GdnZU-GzVi9qhrdmpFEm9A=w1578-h888-s-no?authuser=0",
      }),
    });
  }
}
