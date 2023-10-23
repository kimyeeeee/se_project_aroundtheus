const user = { Name: "", Description: "" };
export default class UserInfo {
  constructor({ userName, userDescription, userPicture }) {
    this.userName = document.querySelector(userName);
    this.userDescription = document.querySelector(userDescription);
    this.userPicture = document.querySelector(userPicture);
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
    this.userPicture.src = avatar;
  }
}
