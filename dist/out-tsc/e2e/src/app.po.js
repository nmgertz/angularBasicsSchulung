import { browser, by, element } from "protractor";
export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl);
    }
    getTitleText() {
        return element(by.css("h1")).getText();
    }
}
//# sourceMappingURL=app.po.js.map