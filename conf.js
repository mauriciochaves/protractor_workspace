//arquivo de configuração do protractor

exports.config = {

    directConnect:true,
    framework: 'jasmine2',
    specs:['test-case/*-test.js'],
    baseUrl:'http://automationpractice.com/index.php',
    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;

        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenshotsFolder:'./shots',
            takeScreenshots:true,
            cleanDestination:false,
            fixedScreenshotName:true
        }));

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine .getEnv().addReporter(new SpecReporter({
            spec:{
       //      displayStacktrace: true,
       //     displayErrorMessages: true,
            displayFailed: true
       //      displayDuration: true
                },
            summary:{
             displayErrorMessages:true,
       //      displayStacktrace: true,
             displaySuccessful:true,
             displayFailed:true
       //      displayDuration:true
            },
            colors:{
             enabled:true
            }
        }));

    },

    capabilities: {
        'browserName':'chrome',

        // chromeOptions: {
        //     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        //   }

    }
}