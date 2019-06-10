import LoginPage from "../page-objects/login-page";
import HomePage from "../page-objects/home-page";
import { browser } from "protractor";

describe('Railway', function () {
  it('TC01 - User can log into Railway with valid username and password', async function () {
    let homepage: HomePage = new HomePage();
    await homepage.open();
    await homepage.goToLoginPage();
    
    let loginPage: LoginPage = new LoginPage();
    await loginPage.login(browser.params.username, browser.params.password);

    let actualMsg = await homepage.getWelcomeMessage();
    let expectedMsg = "Welcome " + browser.params.username;

    expect(await actualMsg).toBe(expectedMsg, "Welcome message is not displayed as expected");
  });
});