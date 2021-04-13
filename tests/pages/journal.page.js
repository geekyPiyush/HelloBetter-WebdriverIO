const NativePage = require('./native.page.js');
const patientConfigData = require('../files/testData/appProperties.data.js');
let userData = require('../features/support/globalTestdata.js');
const jp = require('jsonpath');
const moment = require('moment');

class journalPage extends NativePage {

    get pageElements() {
        return this.getPage('generic.locators');
    }

    addJournalEntry(noOfEntries, journalType) {
        $(this.pageElements.journalLink).click();
        const common = userData.getField('configLang');
        // Pass today's date and on basis of today date create entries for previous <noOfEntries> days
        const today = new Date();
        if (journalType.toUpperCase() === 'MORNING')
            this.journalEntryForMorningRoutine(noOfEntries, common, today);
        else
            this.journalEntryForEveningRoutine(noOfEntries, common, today);
    }

    journalEntryForMorningRoutine(noOfEntries, common, today) {
        moment.locale(testLocale);
        //Common code to loop on creating entries based upon <noOfEntries>
        for (let i = 0; i < noOfEntries; i++) {
            const textToVal = jp.query(common, '$..morning_entry');
            const next = jp.query(common, '$..next');
            const save = jp.query(common, '$..save');
            $(this.pageElements.addJournalLink).click();
            if (i >= 1) {
                today.setDate(today.getDate() - 1);
                $(this.pageElements.datePicker).click();
                $(this.pageElements.selectDateInPicker(today.getUTCDate())).click();
            }
            $(this.pageElements.choseJournalMorning(textToVal)).click();
            for (let i = 0; i < 5; i++)
                $(this.pageElements.continue(next)).click();
            $(this.pageElements.saveBtn(save)).click();

            //Verify morning entry on dashboard
            this.verifyMorningJournalOnDashboard(common, today);
        }
    }

    journalEntryForEveningRoutine(noOfEntries, common, today) {
        moment.locale(testLocale);
        //Common code to loop on creating entries based upon <noOfEntries>
        for (let i = 0; i < noOfEntries; i++) {
            const textToVal = jp.query(common, '$..evening_entry');
            const next = jp.query(common, '$..next');
            const save = jp.query(common, '$..save');
            $(this.pageElements.addJournalLink).click();
            if (i >= 1) {
                today.setDate(today.getDate() - 1);
                $(this.pageElements.datePicker).click();
                $(this.pageElements.selectDateInPicker(today.getUTCDate())).click();
            }
            $(this.pageElements.choseJournalMorning(textToVal)).click();
            for (let i = 0; i < 7; i++)
                $(this.pageElements.continue(next)).click();
            $(this.pageElements.saveBtn(save)).click();

            //Verify evening entry on dashboard
            this.verifyEveningJournalOnDashboard(common, today);
        }
    }

    verifyMorningJournalOnDashboard(commonConfig, date) {
        const toSelectFrom = testLocale === 'en' ? moment(date).format('dddd, MMMM Do') : moment(date).format('dddd, Do MMMM');
        //Get sleep and non sleep time text from right side entry 
        const sleepTimeText = $(this.pageElements.getSleepTime(toSelectFrom)).getText();
        const nonSleepTimeText = $(this.pageElements.getNonSleepTime(toSelectFrom)).getText();
        const finalTextoValidate = moment(date).format('dddd MMMM Do') + '. ' + sleepTimeText + '. ' + nonSleepTimeText + '.';

        //Generate message and validate against the canvas entry
        const timeSpentInBedHeadline = jp.query(commonConfig, '$..graphs.time_spent_in_bed');
        const canvasText = $(this.pageElements.getMorningDataOnDashboard(timeSpentInBedHeadline)).getAttribute('aria-label');

        expect(canvasText).toContain(finalTextoValidate);
    }

    verifyEveningJournalOnDashboard(commonConfig, date) {
        const toSelectFrom = testLocale === 'en' ? moment(date).format('dddd, MMMM Do') : moment(date).format('dddd, Do MMMM');
        const getMoodText = $(this.pageElements.getMoodTextKey(toSelectFrom)).getText() + ' ' + $(this.pageElements.getMoodTextValue(toSelectFrom)).getText();
        const finalTextoValidate = moment(date).format('dddd MMMM Do') + ' ' + getMoodText;

        //Generate message and validate against the canvas entry
        const wellbeingHeadline = jp.query(commonConfig, '$..graphs.wellbeing');
        const canvasText = $(this.pageElements.getEveningDataOnDashboard(wellbeingHeadline, wellbeingHeadline)).getAttribute('aria-label');

        expect(canvasText).toContain(finalTextoValidate);
    }
}

module.exports = journalPage;