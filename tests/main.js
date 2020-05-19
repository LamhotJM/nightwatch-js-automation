module.exports = {
  'Basic Google search' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name="q"]', 1000)
      .setValue('input[name="q"]', 'Guinea pig existential crisis')
      .submitForm('form')
      .waitForElementVisible('#resultStats', 1000)
      .assert.urlContains('q=Guinea+pig')
      .end();
  }
};