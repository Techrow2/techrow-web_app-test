const cypress = require("cypress");
const { defineConfig } = require("cypress");
let EMAIL,configURL
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task',{
        save:(text)=>{
            return (EMAIL=text)
            
        },
        load:() => {
          return EMAIL
        },
        saveURL:(url)=>{
          return(configURL=url)
        },
        getURL:()=>{
          return configURL
        }
      })
      
    },
    defaultCommandTimeout:25000,
    experimentalSessionAndOrigin:true,
    chromeWebSecurity: false
  },
  projectId: "kw7fnb",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test suite',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    json:true,
    html:true,
    reportDir: "cypress/reports",
   reportFilename: "index"
  }
})
