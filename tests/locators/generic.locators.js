class genericLocators {
    constructor() {

        // Sign up Page
        this.signupFirstName = '[id="patient.firstName"]';
        this.signupLastName = '[id="patient.lastName"]';
        this.signupEmail = '[id="patient.email"]';
        this.signupPassword = '[id="patient.password"]';
        this.signupTrainingSelect = '[name="interventionName"]';
        this.signupSleepInput = '[id*=sleep]';
        this.signupTermsCheckbox = '(//label[contains(@class,"components")])[6]';
        this.signupRegisterBtn = 'button[type="submit"]';
        this.languageSelectDrpdown = '//button[contains(@class,"ChangeLanguage")]';
        this.selectEnglish = '//button[contains(@class,"ChangeLanguage")]/following-sibling::ul//a[text()="English"]';
        this.selectDeutsch = '//button[contains(@class,"ChangeLanguage")]/following-sibling::ul//a[text()="Deutsch"]';

        // Startup page
        this.welcomeOkBtn = '//button[contains(@class,"Button__Component") and contains(text(),"OK,")]';
        this.genderSelectMale = 'div[class*="GenderScreen__ButtonBox"]:first-of-type';
        this.birthDayInput = '[name="day"]';
        this.birthMonthInput = '[name="month"]';
        this.birthYearInput = '[name="year"]';

        // User Dashboard
        this.userHeadlineView = '(//h1)[1]';
        this.journalLink = '//a[contains(@href,"journal")]';
        this.addJournalLink = '//a[contains(@href,"journal/new")]';

        //Journal 
        this.datePicker = '//div[contains(@class,"react-datepicker")]/a';
        this.getSelectedDay = '//div[contains(@class,"react-datepicker__day--selected")]';
    }

    //Parameterized locators
    choseJournalMorning(data) { return '//p[text()="' + data + '"]/ancestor::button'; }

    continue (data) { return '//button[text()="' + data + '"]'; }

    selectDateInPicker(day) { return '//div[contains(@class,"react-datepicker__day") and text()="' + day + '" and @aria-disabled="false"]'; }

    saveBtn(data) { return '//button[text()="' + data + '"]'; }

    getSleepTime(date) { return '(//p[contains(text(),"' + date + '")]/parent::div/../following-sibling::div//p)[1]'; }

    getNonSleepTime(date) { return '(//p[contains(text(),"' + date + '")]/parent::div/../following-sibling::div//p)[2]'; }

    getMorningDataOnDashboard(data) { return '//h1[text()="' + data + '"]/parent::div/../following-sibling::div//div[@class="chartjs-size-monitor"]/parent::div' }

    getMoodTextKey(date) { return '(//p[contains(text(),"' + date + '")]/parent::div/../following-sibling::div/div/div/p)[1]'; }

    getMoodTextValue(date) { return '(//p[contains(text(),"' + date + '")]/parent::div/../following-sibling::div/div/div/p)[2]'; }

    getEveningDataOnDashboard(data1, data2) { return '//h1[text()="' + data1 + '"]/parent::div/../following-sibling::div//div[contains(@aria-label,"' + data2 + '")]'; }

    logout(localeText) { return '//span[text()="' + localeText + '"]/parent::a'; }

    login(text) { return '//button[text()="' + text + '"]'; }
}

module.exports = genericLocators;