const NativePage = require('./native.page.js');
const patientConfigData = require('../files/testData/appProperties.data.js');
const fetch = require('node-fetch');
const userData = require('../features/support/globalTestdata.js');

class CommonPage extends NativePage {

    get pageElements() {
        return this.getPage('generic.locators');
    }

    /*
     * Set language based on command line param --locale
     */
    selectLanguage() {
        if (testLocale === 'en') {
            $(this.pageElements.languageSelectDrpdown).click();
            $(this.pageElements.selectEnglish).click();
        }
    }

    openPatientStagingApp() {
        this.callApi(testLocale);
        browser.maximizeWindow();
        //Get the app url from config file
        browser.url(patientConfigData['stage_url']);
        this.selectLanguage();
    }

    /*
     * Since the app is supported in both EN and DE locales for 
     * interacting with various elements on page, we can use the 
     * text() method and based on the locale, call the specific translation
     * API i.e common.json and parse the JSON response to send it to the
     * required findElement method
     */
    async callApi(testLocale) {
        const localeString = testLocale;
        //Load the config based on locale passed from CLI
        const requestURI = localeString.toLowerCase() === 'en' ? patientConfigData['language_en_config'] : patientConfigData['language_de_config'];
        const translations = await fetch(requestURI)
            .then(res => res.json())
            .then(json => {
                return json;
            });
        //Store the json response in global var 'configLang' for further use in scripts
        userData.setField('configLang', translations);
    }
}

module.exports = CommonPage;