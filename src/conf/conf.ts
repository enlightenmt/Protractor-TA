import { ProtractorBrowser, Config } from 'protractor';
export let config: Config = {
  params: {
    railwayURL: 'http://18.136.107.136/Page/HomePage.cshtml',
    username: 'test@theanh.com',
    password: '12345678'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: [
    `../test-cases/TC1.js`,
    // `../test-cases/TC2.js`,
    // `../test-cases/TC3.js`,
    // `../test-cases/TC4.js`
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  }
}