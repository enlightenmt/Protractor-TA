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
const login_page_1 = __importDefault(require("../page-objects/login-page"));
const browser_wrapper_1 = __importDefault(require("../utilities/wrappers/browser-wrapper"));
const home_page_1 = __importDefault(require("../page-objects/home-page"));
describe('Dashboard', function () {
    it('Verify that user can login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser_wrapper_1.default.get("http://192.168.171.191:4200/login");
            let loginPage = new login_page_1.default();
            yield loginPage.login("admin", "1234");
            let homepage = new home_page_1.default();
            expect(yield homepage.isPageDisplayed()).toBe(true, "Homepage is not displayed");
        });
    });
});
//# sourceMappingURL=login.js.map