const { defineConfig } = require('cypress')
module.exports = defineConfig({
    e2e: {
        specPattern : "cypress/support/e2e/**/*.{spec,cy}.js",
        supportFile : false,
        import      :'cypress-xpath'
    }
    
})