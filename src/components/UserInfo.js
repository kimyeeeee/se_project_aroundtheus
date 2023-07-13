const user = { name: "", job: "" };
export default class UserInfo {
  constructor(selectors) {
    this.userName = document.querySelector(selectors.userName);
    this.userDescription = document.querySelector(selectors.userDescription);
  }

  getUserInfo() {
    return {
      name: this.userName.textContent,
      job: this.userDescription.textContent,
    };
  }

  setUserInfo() {
    this.userName.textContent = user.name;
    this.userDescription.textContent = user.job;
  }
}
