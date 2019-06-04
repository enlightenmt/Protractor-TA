import { browser } from "protractor";

let protractor = require("protractor");


export default class BrowserWrapper {

    public static async get(url: string): Promise<void> {
        try {
            await browser.waitForAngularEnabled(false);
            await browser.get(url)
        } catch (err) {
            throw "Failed to navigate" + err;
        }
    }
}