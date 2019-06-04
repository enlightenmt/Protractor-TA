import LoginPage from "../page-objects/login-page";
import BrowserWrapper from "../utilities/wrappers/browser-wrapper";
import HomePage from "../page-objects/home-page";

describe('Dashboard', function () {
  it('Verify that user can login', async function () {
    await BrowserWrapper.get("http://192.168.171.191:4200/login");

    let loginPage: LoginPage = new LoginPage();
    await loginPage.login("admin", "1234");

    let homepage: HomePage = new HomePage();
    expect(await homepage.isPageDisplayed()).toBe(true, "Homepage is not displayed");
  });
});