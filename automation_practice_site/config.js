var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    directConnect:true,
    framework: 'jasmine2',
    specs:['test-cases/*-test.js'],
    baseUrl:'http://practice.automationtesting.in/',
    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(20000);
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;

        // Adicione um repórter de screenshots em reports/docs
        jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'reports/docs',
        // screenshotsSubfolder: 'screenshots', //armazenar todas as imagens
        // jsonsSubfolder: 'jsons', //armazenar todos os JSONs
        // excludeSkippedSpecs : true, //excluir totalmente os casos de teste ignorados.
        // takeScreenShotsForSkippedSpecs : false,  //Você pode definir se deseja que as capturas de tela dos relatórios sejam ignoradas
        // takeScreenShotsOnlyForFailedSpecs : false, //definir se deseja capturar capturas de tela somente de casos de teste com falha
        // docTitle : ' Automation Practice Site ',
        // docName : ' relatorio_de_cts.html ',
        //cssOverrideFile : ' css / style.css ', //alterar o css usada para o relatório html gerado
        // clientDefaults : {
        //     searchSettings : {
        //         allselected : true , 
        //         passou : true , 
        //         falhou : true , 
        //         pendente : true , 
        //         withLog : true 
        //     },
        //     columnSettings : {
        //         displaytime : true ,
        //         displayBrowser : true ,
        //         displaySessionId : true ,
        //         inlineScreenshots : true
        //     }
        // }

        }).getJasmine2Reporter());
    },

    capabilities: {
        'browserName':'chrome',

        // chromeOptions: {
        //     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        //   }

    }
}