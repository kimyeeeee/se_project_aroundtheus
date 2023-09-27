const user = { Name: "", Description: "" };
export default class UserInfo {
  constructor({ userName, userDescription, userPicture }) {
    this.userName = document.querySelector(selectors.userName);
    this.userDescription = document.querySelector(selectors.userDescription);
    this.userPicture = document.querySelector(selectors.userPicture);
  }

  getUserInfo() {
    return {
      name: this.userName.textContent,
      description: this.userDescription.textContent,
    };
  }

  setUserInfo(name, description) {
    this.userName.textContent = name;
    this.userDescription.textContent = description;
  }

  setAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
