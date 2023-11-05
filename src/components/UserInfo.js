// const user = { Name: "", About: "" };
export default class UserInfo {
  constructor({ userName, userAbout, userPicture }) {
    this.userName = document.querySelector(userName);
    this.userAbout = document.querySelector(userAbout);
    this.userPicture = document.querySelector(userPicture);
  }

  getUserInfo() {
    return {
      name: this.userName.textContent,
      about: this.userAbout.textContent,
    };
  }

  setUserInfo(name, about) {
    this.userName.textContent = name;
    this.userAbout.textContent = about;
  }

  setAvatar(avatar) {
    this.userPicture.src = avatar;
  }
}
