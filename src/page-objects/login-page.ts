import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by } from "protractor";

export default class LoginPage {

	protected txtUsername = new ElementWrapper(by.xpath("//input[@id='inputEmail']"));
	protected txtPassword = new ElementWrapper(by.xpath("//input[@id='inputPassword']"));
	protected btnLogin = new ElementWrapper(by.xpath("//button[@id='btnSubmit']"));
	

	public async login(username: string, password: string): Promise<void> {
        try {
			await this.txtUsername.type(username);
			await this.txtPassword.type(password);
            await this.btnLogin.click();
        } catch (err) {
            throw err;
        }
    }

    
}