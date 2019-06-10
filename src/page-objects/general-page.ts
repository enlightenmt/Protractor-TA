import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by } from "protractor";
import LoginPage from "./login-page";
import BookTicketPage from "./book-ticket-page";

export default class GeneralPage {
    protected tabLogin = new ElementWrapper(by.xpath("//div[@id='menu']//a[@href='/Account/Login.cshtml']"));
    protected tabBookTicket = new ElementWrapper(by.xpath("//a[@href='/Page/BookTicketPage.cshtml']"));
    protected lblWelcomeMessage = new ElementWrapper(by.xpath("//div[@class='account']/strong"));

    public async goToLoginPage(): Promise<LoginPage> {
        try {
            await this.tabLogin.click();
            return await LoginPage.getInstance();
        } catch (err) {
            throw err;
        }
    }

    public async gotoBookTicketPage(): Promise<BookTicketPage> {
        try {
            await this.tabBookTicket.click();
            return await BookTicketPage.getInstance();
        } catch (err) {
            throw err;
        }
    }

    public async gotoBookTicketPageWithoutLogin(): Promise<LoginPage> {
        try {
            await this.tabBookTicket.click();
            return await LoginPage.getInstance();
        } catch (err) {
            throw err;
        }
    }

    public async getWelcomeMessage(): Promise<string> {
        return await this.lblWelcomeMessage.getText();
    }
}