//email valid: test_mcsj@test.com
//pass valid: test123

const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');

describe('Since I accessed the login page', function(){

    const login_page = new LoginPage();
    const home_page = new HomePage();

    beforeEach(function(){
        browser.get(login_page.path);
        home_page.access_sign_in();
    });

    it('when the password is invalid', function(){
 
     
     login_page.log_in('test_mcsj@test.com','teste678');
     expect(login_page.alert.getText()).toContain('There is 1 error');   
     expect(login_page.error.getText()).toEqual('Authentication failed.');
       
    });

    it('when the user is not registered', function(){
       
     login_page.log_in('me1@test.io','test123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('Authentication failed.');

    });
     
    it('when email is incorrect', function(){
     
     login_page.log_in('test_mcsj&test.com','teste123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('Invalid email address.');

    });

    it('when email is white', function(){
       
     login_page.log_in(' ','teste123');
     expect(login_page.alert.getText()).toContain('There is 1 error');  
     expect(login_page.error.getText()).toEqual('An email address required.');

    });

    it('when the password is white', function(){
     
     login_page.log_in('test_mcsj@test.com','');
     expect(login_page.alert.getText()).toContain('There is 1 error');   
     expect(login_page.error.getText()).toEqual('Password is required.');

    });

    it('when I try to register an email already registered', function(){
     
     login_page.create_an_account('test_mcsj@test.com');
     expect(login_page.error.getText()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');

    });

    it('when I try to register an incorrect email', function(){
     
     login_page.create_an_account('test_mcsj&test.com');
     expect(login_page.error.getText()).toEqual('Invalid email address.');

    });

    it('when I try to register without informing an email', function(){
        
     login_page.create_an_account('');
     expect(login_page.error.getText()).toEqual('Invalid email address.');

    });

});