import LoginPage from "../page-objects/login-page";
import HomePage from "../page-objects/home-page";
import { browser } from "protractor";

describe('Railway', function () {
  it('TC03 - User cannot log into Railway with invalid password', async function () {
    let homepage: HomePage = new HomePage();
    await homepage.open();
    await homepage.goToLoginPage();
    
    let loginPage: LoginPage = new LoginPage();
    await loginPage.invalidLogin(browser.params.username, "invalidpassword");

    let actualMsg = await loginPage.getErrorMsg();
    let expectedMsg = "There was a problem with your login and/or errors exist in your form.";

    expect(await actualMsg).toBe(expectedMsg, "Error message is not displayed as expected");
  });
});