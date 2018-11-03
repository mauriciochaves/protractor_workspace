
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const CreateAnAccountPage = require('../pages/create-account-page');
const AccountPage = require('../pages/account-page');

describe('Since I accessed the page to create an account', function(){

   const login_page = new LoginPage();
   const home_page = new HomePage();
   const create_account = new CreateAnAccountPage();
   const account_page = new AccountPage();

    beforeEach(function(){
     browser.get(login_page.path);
     home_page.access_sign_in();

    });

    afterAll(function(){
      home_page.button_signout_is_visible();
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
                 email_register: 'test43S_mcsj@teste.com'
                };

      it('when I fill in the First Name with special character', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First_Name', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.');
      });

      it('when I fill in the First Name with numerical values', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First1', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.'); 
      });

      it('when I fill in the First Name with blank value', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is required.'); 
      });
    
      it('when I fill in the Last Name with a special character', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, 'Last_', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is invalid.'); 
      });

      it('when I fill in the Last Name with numerical values', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, 'Last1', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is invalid.'); 
      });

      it('when I fill in the Last Name with blank value', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, '', cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is required.'); 
      });

      it('when I enter the Password with 4 characters', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, '1234', cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('passwd is invalid.'); 
        expect(create_account.input_password_personal.getText()).toEqual(''); 
      });

      it('When I do not fill in the password', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, '', cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();

        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('passwd is required.'); 
      });

      it('when I fill in the First Name of the Your Personal Information group and check the First Name field of the Your Address group', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        
        expect(create_account.first_name_address.getAttribute('value')).toEqual(cenario.first_name);
      });

      it('when I fill in the First Name of the Your Personal Information group and clear the First Name field of the Your Address group', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.first_name_address.clear();
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is required.');
      });

      it('when I fill in the Last Name of the Your Personal Information group and check the Last Name field of the Your Address group', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
         
        expect(create_account.last_name_address.getAttribute('value')).toEqual(cenario.last_name);
      });

      it('when I fill in the Last Name of the Your Personal Information group and clear the Last Name field of the Your Address group', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias); 
        create_account.last_name_address.clear();
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('lastname is required.');
      });

      it('when informing an email at the time of registration is valid the email field of the group Your Personal Information', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        
        expect(create_account.input_email_personal.getAttribute('value')).toEqual(cenario.email_test_error);
      });

      it('when you enter an email at the time of registration and clear the email field from the Your Personal Information group', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.input_email_personal.clear();
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('email is required.');
      });

      it('when you fill in the Address with a special character', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('address1 is invalid.');
      });

      it('when you do not fill in the Address', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, '', cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('address1 is required.');
      });

      it('When I do not fill the City', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, '', cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('city is required.'); 
      });
    
      it('when I fill in the City with a special character', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('city is invalid.'); 
      });

      it('when I do not report the State', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, '', cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('This country requires you to choose a State.'); 
      });

      it('when I fill in the Zip / Postal Code with letters', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, 'ABCDE', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });

      it('when filling the Zip / Postal Code with 4 numerical characters', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, '1234', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });

      it('when you do not fill in the Zip / Postal Code', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, '', cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("The Zip/Postal code you've entered is invalid. It must follow this format: 00000"); 
      });
      
      it('when I do not fill in the Mobile Phone', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, '', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("You must register at least one phone number."); 
      });

      it('when I fill in the Mobile Phone with letters', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, 'ABCDEF', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("phone_mobile is invalid."); 
      });

      it('when I fill in the Mobile Phone with special characters', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, 'A!D"D@R#ES$S%¨&*()-_+=§¬[´`]ªº{}/?°;:>.<,', cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("phone_mobile is invalid."); 
      });

      it('when you do not fill in the Address Alias', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, '');
        create_account.input_address_alias.clear();
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual("alias is required."); 
      });
     
      it('when you fill in only the required fields', function(){
      
        login_page.create_an_account(cenario.email_register);
        create_account.fill_in_required_fields(cenario.first_name, cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(account_page.text_welcome_my_account.getText()).toContain('Welcome to your account. Here you can manage all of your personal information and orders.');     
      });

});