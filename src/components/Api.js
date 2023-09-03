export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "63bd0a97-87e8-4761-93e7-bc9458ee6ee5",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      haeders: this._headers,
    }).then(this._handleResponse);
  }
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data.user.name);
  //       })
  //       .catch((err) => {
  //         console.error("Error. The request has failed.", err);
  //       });
}
