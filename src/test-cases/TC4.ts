import LoginPage from "../page-objects/login-page";
import HomePage from "../page-objects/home-page";
import { browser } from "protractor";
import BookTicketPage from "../page-objects/book-ticket-page";

describe('Railway', function () {
  it('TC04 - User is redirected to Book ticket page after logging in', async function () {
    let homepage: HomePage = new HomePage();
    await homepage.open();
    await homepage.gotoBookTicketPageWithoutLogin();
    
    let loginPage: LoginPage = new LoginPage();
    expect(await loginPage.isPageDisplayed()).toBe(true, "Login page is not displayed as expected")

    await loginPage.loginFromBookTicket(browser.params.username, browser.params.password);

    let bookTicketPage: BookTicketPage = new BookTicketPage();
    expect(await bookTicketPage.isBookTicketFormElementsDisplayed()).toBe(true, "Book Ticket page is not displayed as expected");
  });
});