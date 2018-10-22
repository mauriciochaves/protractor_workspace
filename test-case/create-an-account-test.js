
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const CreateAnAccountPage = require('../pages/create-account-page');
const AccountPage = require('../pages/account-page')

describe('Dado que acessei a página para criar uma conta', function(){

    const login_page = new LoginPage();
    const home_page = new HomePage();
    const create_account = new CreateAnAccountPage();
    const account_page = new AccountPage();

    beforeEach(function(){
        browser.get(login_page.path);
        home_page.access_sign_in();
    });

    cenario = {
        first_name: 'First_user_Test',
        last_name:'Last_user_test',
        password:'teste12345',
        address:'Test Address', 
        city:'Recife', 
        state:'Alabama',
        zip:'00000', 
        country:'United States',
        phone_mobile:'81999999999', 
        address_alias:'Test Address Alias' 
    };

  
    it('quando preencho apenas os campos obrigatorios', function(){
      
      login_page.create_an_account('test3_mcsj@test.com');
      create_account.fill_in_required_fields(cenario.first_name);
      create_account.register_click_on();

      expect(account_page.text_welcome_my_account.getText()).toContain('Welcome to your account. Here you can manage all of your personal information and orders.');   
    });

    
});