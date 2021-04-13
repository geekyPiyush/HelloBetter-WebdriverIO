let globalTestData = function() {
    this.testData = {
        configLang: '',
    };
    this.setField = function(field, value) {
        this.testData[field] = value;
    };

    this.getField = function(field) {
        return this.testData[field];
    };
};
module.exports = new globalTestData();