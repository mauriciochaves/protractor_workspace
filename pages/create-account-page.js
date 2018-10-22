class CreateAnAccountPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';
        this.radio_mr_personal = element(by.id('id_gender1'));
        this.radio_mrs_personal = element(by.id('id_gender2'));
        this.input_first_name_personal = element(by.css('input[name=customer_firstname]'));
        this.input_last_name_personal = element(by.id('customer_lastname'));
        this.input_email_personal = element(by.id('email'));
        this.input_password_personal = element(by.id('passwd'));
        this.select_days = element(by.id('days'));
        this.select_months = element(by.id('months'));
        this.select_years = element(by.id('years'));
        this.check_sign_up_newsletter= element(by.id('newsletter'));
        this.check_accept_special_offerts = element(by.id('optin'));
        this.first_name_address = element(by.id('firstname'));
        this.last_name_address = element(by.id('lastname'));
        this.input_company = element(by.id('company'));
        this.input_address = element(by.id('address1'));
        this.input_address_line2 = element(by.id('address2'));
        this.input_city = element(by.id('city'));
        this.select_state = element(by.id('id_state'));
        this.input_zip_code = element(by.id('postcode'));
        this.select_country = element(by.id('id_country'));
        this.input_additional_information = element(by.id('other'));
        this.input_home_phone = element(by.id('phone'));
        this.input_mobile_phone = element(by.id('phone_mobile'));
        this.input_address_alias = element(by.id('alias'));
        this.register = element(by.id('submitAccount'));

    }

    fill_in_required_fields(firstname){
        this.input_first_name_personal.sendKeys(firstname);
        
    }
    
    register_click_on(){
        this.register.click();
    }



}

module.exports = CreateAnAccountPage;