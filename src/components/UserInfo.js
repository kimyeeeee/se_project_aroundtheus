const user = { Name: "", Description: "" };
export default class UserInfo {
  constructor(selectors) {
    this.userName = document.querySelector(selectors.userName);
    this.userDescription = document.querySelector(selectors.userDescription);
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
}
