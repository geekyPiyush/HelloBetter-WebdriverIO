class UtilPage {

    createRandomString(value) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            randomString = '',
            rnum;
        for (var i = 0; i < value; i++) {
            rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum, rnum + 1);
        }
        return randomString;
    };
}

module.exports = UtilPage;