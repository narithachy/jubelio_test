const { defineConfig } = require('cypress')
module.exports = defineConfig({
    viewportHeight: 1080,
    viewportWidth:1920,
    video: true,
    videoCompression: 32,
    e2e: {
        specPattern : "cypress/support/e2e/**/*.js",
        supportFile : "cypress/support/*.js",
        import      :'cypress-xpath'
    }
    
})