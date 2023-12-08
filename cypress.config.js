const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mwwtt7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    "responseTimeout": 60000,
    "baseUrl": "https://testworthy.us/login",
    "reporter": "mochawesome",
    "video": true
  },
});





