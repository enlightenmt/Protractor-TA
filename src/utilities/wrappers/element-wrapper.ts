import { browser, ElementFinder, Locator, until } from "protractor";

export default class ElementWrapper {
    private _by: Locator;
    private _element: ElementFinder;

    constructor(obj: Locator) {
        let loc = obj as Locator;
        this._by = loc;
        this._element = browser.element(this._by);
    }

    public async wait(timeOut: number = 60000): Promise<this> {
        await browser.driver.wait(this._element.isEnabled(), timeOut);
        return this;
    }

    public async click(): Promise<this> {
        await this.wait();
        await this._element.click();
        return this;
    }

    public async type(text: string): Promise<this> {
        await this.wait();
        await this._element.clear();
        await this._element.sendKeys(text);
        return this;
    }

    public async isDisplayed(): Promise<boolean> {
        return await this._element.isDisplayed();
    }
}