import LoginPage from "../page-objects/login-page";
import HomePage from "../page-objects/home-page";
import { browser } from "protractor";

describe('Railway', function () {
  it('TC02 - User can\'t login with blank "Username" textbox', async function () {
    let homepage: HomePage = new HomePage();
    await homepage.open();
    await homepage.goToLoginPage();
    
    let loginPage: LoginPage = new LoginPage();
    await loginPage.invalidLogin("", browser.params.password);

    let actualMsg = await loginPage.getErrorMsg();
    let expectedMsg = "There was a problem with your login and/or errors exist in your form.";

    expect(await actualMsg).toBe(expectedMsg, "Error message is not displayed as expected");
  });
});