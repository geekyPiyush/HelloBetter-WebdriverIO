const { Given, When, Then, And } = require('cucumber');

const journal = require('../../pages/journal.page.js');
const journalPage = new journal();

When(/^I create and verify (.*) journal entries for (.*)$/, (noOfEntries, journalType) => {
    journalPage.addJournalEntry(noOfEntries, journalType);
});