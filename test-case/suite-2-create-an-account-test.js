
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const CreateAnAccountPage = require('../pages/create-account-page');
const AccountPage = require('../pages/account-page');

describe('Dado que acessei a página para criar uma conta', function(){

   const login_page = new LoginPage();
   const home_page = new HomePage();
   const create_account = new CreateAnAccountPage();
   const account_page = new AccountPage();

    beforeEach(function(){
     browser.get(login_page.path);
     home_page.access_sign_in();

    });

    afterAll(function(){
      browser.close();
      
     });

      cenario = {
                 first_name: 'First user Test',
                 last_name:'Last user test',
                 password:'teste12345',
                 address:'Test Address', 
                 city:'Recife', 
                 state:'Alabama',
                 zipcode:'00000', 
                 country:'United States',
                 phone_mobile:'81999999999', 
                 address_alias:'Test Address Alias', 
                 email_test_error:'test22_mcsj@teste.com',
                 email_register: 'test36S_mcsj@teste.com'
                };

      it('quando preencho o First Name com caracter especial', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First_Name', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.');
      });

      it('quando preencho o First Name com valores numericos', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First1', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.'); 
      });

      it('quando preencho o First Name com valor em branco', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is required.'); 
      });
    
      it('quando preencho o Last Name com caracter especial', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, 'Last_', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is invalid.'); 
      });

      it('quando preencho o Last Name com valores numericos', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, 'Last1', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is invalid.'); 
      });

      it('quando preencho o Last Name com valor em branco', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, '', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is required.'); 
      });

      it('quando preencho o Password com 4 caracteres', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, '1234', cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('passwd is invalid.'); 
        expect(create_account.input_password_personal.getText()).toEqual(''); 
      });

      it('quando não preencho o Password', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, '', cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();

        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('passwd is required.'); 
      });

      it('quando preencho o First Name do grupo Your Personal Information e verifico o campo First Name do grupo Your Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        
        expect(create_account.first_name_address.getAttribute('value')).toEqual(cenario.first_name);
      });

      it('quando preencho o First Name do grupo Your Personal Information e limpo o campo First Name do grupo Your Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.first_name_address.clear();
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is required.');
      });

      it('quando preencho o Last Name do grupo Your Personal Information e verifico o campo Last Name do grupo Your Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
         
        expect(create_account.last_name_address.getAttribute('value')).toEqual(cenario.last_name);
      });

      it('quando preencho o Last Name do grupo Your Personal Information e limpo o campo Last Name do grupo Your Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias); 
        create_account.last_name_address.clear();
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is required.');
      });

      it('quando informo um email no ato do registro e valido o campo email do grupo Your Personal Information', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        
        expect(create_account.input_email_personal.getAttribute('value')).toEqual(cenario.email_test_error);
      });

      it('quando informo um email no ato do registro e limpo o campo email do grupo Your Personal Information', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.input_email_personal.clear();
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('email is required.');
      });

      it('quando preencho o Address  com caracter especial', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('address1 is invalid.');
      });

      it('quando não preencho o Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, '', cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('address1 is required.');
      });

      it('quando não preencho o City', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, '', cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('city is required.'); 
      });
    
      it('quando preencho o City com caracter especial', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('city is invalid.'); 
      });

      it('quando não informo o State', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, '', cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('This country requires you to choose a State.'); 
      });

      it('quando preencho o Zip/Postal Code com letras', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, 'ABCDE', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });

      it('quando preencho o Zip/Postal Code com 4 caracteres numericos', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, '1234', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });

      it('quando não preencho o Zip/Postal Code', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, '', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });
      
      it('quando não preencho o Mobile Phone', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, '', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("You must register at least one phone number."); 
      });

      it('quando preencho o Mobile Phone com letras', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, 'ABCDEF', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("phone_mobile is invalid."); 
      });

      it('quando preencho o Mobile Phone com caracteres especiais', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("phone_mobile is invalid."); 
      });

      it('quando não preencho o Address Alias', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, '');
        create_account.input_address_alias.clear();
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("alias is required."); 
      });
     
      it('quando preencho apenas os campos obrigatorios', function(){
      
        login_page.create_an_account(cenario.email_register);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(account_page.text_welcome_my_account.getText()).toContain('Welcome to your account. Here you can manage all of your personal information and orders.'); 
        home_page.button_sign_out_click_on();
        expect(login_page.page_header.getText()).toEqual('AUTHENTICATION');
           
      });


});