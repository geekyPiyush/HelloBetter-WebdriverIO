const NativePage = require('./native.page.js');
let userData = require('../features/support/globalTestdata.js');
const jp = require('jsonpath');

class signUpPage extends NativePage {

    get pageElements() {
        return this.getPage('generic.locators');
    }

    signupPatient(randomString) {
        const firstName = "First" + randomString;

        //Signup first page
        $(this.pageElements.signupFirstName).setValue(firstName);
        $(this.pageElements.signupLastName).setValue("Last" + randomString);
        $(this.pageElements.signupEmail).setValue(randomString + "@ex.com");
        $(this.pageElements.signupPassword).setValue("Test432#" + randomString);
        $(this.pageElements.signupTrainingSelect).selectByIndex(1);
        $(this.pageElements.signupTermsCheckbox).click();
        $(this.pageElements.signupRegisterBtn).click();

        //Welcome page
        $(this.pageElements.welcomeOkBtn).click();

        //Gender selection
        $(this.pageElements.genderSelectMale).waitForExist({ timeout: 4000 });
        $(this.pageElements.genderSelectMale).click();

        //Birthday selection
        $(this.pageElements.birthDayInput).waitForDisplayed({ timeout: 4000 });
        $(this.pageElements.birthDayInput).setValue("10");
        $(this.pageElements.birthMonthInput).setValue("4");
        $(this.pageElements.birthYearInput).setValue("1996");
        $(this.pageElements.signupRegisterBtn).click();

        //Verify user dashboard is shown
        expect($(this.pageElements.userHeadlineView)).toHaveTextContaining(firstName);
    }

    logout() {
        const common = userData.getField('configLang');
        const logoutLinkText = jp.query(common, '$..logout');
        $(this.pageElements.logout(logoutLinkText)).click();
        browser.pause(3000);
        const loginLink = jp.query(common, '$..log_in');
        expect($(this.pageElements.login(loginLink))).toBeVisible();
    }

}

module.exports = signUpPage;