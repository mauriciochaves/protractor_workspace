
//^ = começa com
//$ = termina com
//* = contém

//email valid: teste_mcsj@test.com
//pass valid: test123

const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');

describe('Dado que acessei a página login', function(){

    const login_page = new LoginPage();
    const home_page = new HomePage();

    beforeEach(function(){
        browser.get(login_page.path);
    });


    it('quando a senha é inválida', function(){

     home_page.access_sign_in();
     login_page.log_in('test_mcsj@test.com','teste678');
     expect(login_page.alert.getText()).toContain('There is 1 error');   
     expect(login_page.error.getText()).toEqual('Authentication failed.');
       
    });

    it('quando o usuário não está cadastrado', function(){
       
     home_page.access_sign_in();   
     login_page.log_in('me1@test.io','test123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('Authentication failed.');

    });
     
    it('quando o email é incorreto', function(){
     
     home_page.access_sign_in();
     login_page.log_in('test_mcsj&test.com','teste123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('Invalid email address.');

    });

    it('quando o email é branco', function(){
        
     home_page.access_sign_in();
     login_page.log_in(' ','teste123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('An email address required.');

    });

    it('quando a senha é branco', function(){
     
        home_page.access_sign_in();
        login_page.log_in('test_mcsj@test.com','');
        expect(login_page.alert.getText()).toContain('There is 1 error');   
        expect(login_page.error.getText()).toEqual('Password is required.');

    });


});