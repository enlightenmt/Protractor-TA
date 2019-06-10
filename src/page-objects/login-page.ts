import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by } from "protractor";
import HomePage from "./home-page";
import BookTicketPage from "./book-ticket-page";

export default class LoginPage {

	private static _loginPage: LoginPage = null;

	protected txtUsername = new ElementWrapper(by.xpath("//input[@id='username']"));
	protected txtPassword = new ElementWrapper(by.xpath("//input[@id='password']"));
	protected btnLogin = new ElementWrapper(by.xpath("//input[@value='login']"));
	protected getLblLoginErrorMsg = new ElementWrapper(by.xpath("//p[@class='message error LoginForm']"));

	public static getInstance(): LoginPage {
		this._loginPage = new LoginPage();
		return this._loginPage;
	}

	public async login(username: string, password: string): Promise<HomePage> {
		try {
			await this.txtUsername.type(username);
			await this.txtPassword.type(password);
			await this.btnLogin.click();

			return await HomePage.getInstance();
		} catch (err) {
			throw err;
		}
	}

	public async loginFromBookTicket(username: string, password: string): Promise<BookTicketPage> {
		try {
			await this.txtUsername.type(username);
			await this.txtPassword.type(password);
			await this.btnLogin.click();

			return await BookTicketPage.getInstance();
		} catch (err) {
			throw err;
		}
	}

	public async invalidLogin(username: string, password: string): Promise<LoginPage> {
		try {
			await this.txtUsername.type(username);
			await this.txtPassword.type(password);
			await this.btnLogin.click();

			return this;
		} catch (err) {
			throw err;
		}
	}

	public async getErrorMsg(): Promise<string> {
		return await this.getLblLoginErrorMsg.getText();
	}

	public async isPageDisplayed(): Promise<boolean> {
        try {
            return await this.txtUsername.isDisplayed();
        } catch (err) {
            throw err;
        }
    }
}