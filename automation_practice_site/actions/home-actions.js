const HomePage = require('../pages/home-page');
const home_page = new HomePage();

var StructureFunctions = function(){
    
    this.get = function(){
        browser.get('http://practice.automationtesting.in/');
    };
    
    this.myAccount_click_on = function(){
        home_page.btn_my_account.click();
    };
};

var BussinessFunctions = function(){

};
module.exports = {StructureFunctions: new StructureFunctions, BussinessFunctions: new BussinessFunctions};