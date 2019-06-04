"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_wrapper_1 = __importDefault(require("../utilities/wrappers/element-wrapper"));
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.txtUsername = new element_wrapper_1.default(protractor_1.by.xpath("//input[@id='inputEmail']"));
        this.txtPassword = new element_wrapper_1.default(protractor_1.by.xpath("//input[@id='inputPassword']"));
        this.btnLogin = new element_wrapper_1.default(protractor_1.by.xpath("//button[@id='btnSubmit']"));
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.txtUsername.type(username);
                yield this.txtPassword.type(password);
                yield this.btnLogin.click();
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = LoginPage;
//# sourceMappingURL=login-page.js.map