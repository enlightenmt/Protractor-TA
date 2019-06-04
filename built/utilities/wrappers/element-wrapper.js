"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ElementWrapper {
    constructor(obj) {
        let loc = obj;
        this._by = loc;
        this._element = protractor_1.browser.element(this._by);
    }
    wait(timeOut = 60000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.wait(this._element.isEnabled(), timeOut);
            return this;
        });
    }
    click() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.wait();
            yield this._element.click();
            return this;
        });
    }
    type(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.wait();
            yield this._element.clear();
            yield this._element.sendKeys(text);
            return this;
        });
    }
    isDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._element.isDisplayed();
        });
    }
}
exports.default = ElementWrapper;
//# sourceMappingURL=element-wrapper.js.map