import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by, browser } from "protractor";
import GeneralPage from "./general-page";
import BrowserWrapper from "../utilities/wrappers/browser-wrapper";


export default class HomePage extends GeneralPage {

    private static _homePage: HomePage = null;
    

    protected txtTitle = new ElementWrapper(by.xpath("//h3[@id='hHeader']"));

    public static getInstance(): HomePage {
		this._homePage = new HomePage();
		return this._homePage;
	}

    public async open(): Promise<HomePage> {
        await BrowserWrapper.get(browser.params.railwayURL);
        return this;
    }

    public async isPageDisplayed(): Promise<boolean> {
        try {
            return await this.txtTitle.isDisplayed();
        } catch (err) {
            throw err;
        }
    }
}