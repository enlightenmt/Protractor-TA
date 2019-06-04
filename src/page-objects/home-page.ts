import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by } from "protractor";

export default class HomePage {
    protected txtTitle = new ElementWrapper(by.xpath("//h3[@id='hHeader']"));

    public async isPageDisplayed(): Promise<boolean> {
        try {
            return await this.txtTitle.isDisplayed();
        } catch (err) {
            throw err;
        }
    }
}