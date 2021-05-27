const Page = require("./page");

class SmileyPage extends Page {
  /**
   * define selectors using getter methods
   */
  //  $$("~loginButton");

  get smileyImage() {
    return $("~smileyImage");
  }
}

module.exports = new SmileyPage();
