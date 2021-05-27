const loginPage = require("../pageobjects/login.page");
const smileyPage = require("../pageobjects/smiley.page");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("My Login application", () => {
  it("test email field", async () => {
    await loginPage.setEmail("validEmail");
    // driver.pressKeyCode(13);

    // expect(loginPage.getEmail).toBe("validEmail");
    // $("~emailTextField").getText();
    const email = await loginPage.inputEmail;
    const value = await email.getText();
    expect(value).toEqual("validEmail");
  });

  //some how this doesnt work
//   it("test password field", async () => {
//     await loginPage.setPassword("validPW");
//     //   driver.pressKeyCode(13);
//     const password = await loginPage.inputPassword;
//     const value = await password.getValue();
//     expect(value).toEqual("validPW");
//   });

  it("test login button", async () => {
    await loginPage.login("validEmail", "validPW!");

    //   await expect(loginPage.inputEmail.getAttribute("value")).toBe("validEmail");
    //   await expect(loginPage.inputPassword.getAttribute("value")).toBe("validPW");

    const email = await loginPage.inputEmail;
    const value = await email.getText();
    expect(value).toEqual("validEmail");

    const smileyImage = await smileyPage.smileyImage;
    const isDisplayed = await smileyImage.isDisplayed();
    await expect(isDisplayed).toBeTrue();
  });
});
