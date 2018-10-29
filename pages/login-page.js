//^ = começa com
//$ = termina com
//* = contém

class LoginPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';
        this.input_email = element(by.css('input[name=email]'));
        this.input_password = element(by.css('input[name=passwd]'));
        this.submit = element(by.css('button[name=SubmitLogin]'));
        this.alert = element(by.css('div[class*=alert-danger]'));
        this.error = element(by.css('ol'));
        this.recover_password = element(by.css('a[title^=Recover]'));
        this.create_email = element(by.css('input[name=email_create]'));
        this.create_submit = element(by.css('button[name=SubmitCreate]'));
        this.page_header = element(by.css('.page-heading'));

    }

    //structure functions

    //business functions
    log_in(email, pass){
        this.input_email.sendKeys(email);
        this.input_password.sendKeys(pass);
        this.submit.click();
    }

    create_an_account(email){
        this.create_email.sendKeys(email);
        this.create_submit.click();
    }


}

module.exports = LoginPage;