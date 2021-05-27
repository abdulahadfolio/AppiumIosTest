const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  //  $$("~loginButton");

  get inputEmail() {
    return $("~emailTextField");
  }
  get inputPassword() {
    return $("~passwordTextField");
  }
  get btnLogin() {
    return $("~loginButton");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async setEmail(email) {
    const emailField = await this.inputEmail;
    await emailField.setValue(email);
  }
  async setPassword(password) {
    const passwordField = await this.inputPassword;
    await passwordField.setValue(password);
  }
  async login(email, password) {
    const emailField = await this.inputEmail;
    await emailField.setValue(email);

    const passwordField = await this.inputPassword;
    await passwordField.setValue(password);

    const loginButton = await this.btnLogin;

    await loginButton.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
