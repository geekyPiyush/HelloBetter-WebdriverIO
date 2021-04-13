const { Given, When, Then, And } = require('cucumber');

const signupPage = require('../../pages/signup.page.js');
const common = require('../../pages/common.page.js');
const utilities = require('../../utils/util.common.js');

const signUpPage = new signupPage();
const commonPage = new common();
const util = new utilities();

Given(/^I open patient staging app$/, () => {
    commonPage.openPatientStagingApp();
});

When(/^I signup to patient portal$/, () => {
    const randomString = util.createRandomString(5);
    signUpPage.signupPatient(randomString);
});

When(/^I logout of the application$/, () => {
    signUpPage.logout();
});