class AccountPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';
        this.text_welcome_my_account = element(by.css('p[class=info-account]'));
        this.button_order_history_and_datails = element(by.css('a[title=Orders]'));
        this.button_my_credit_slips = element(by.css('a[title$=slips]'));
        this.button_my_addresses = element(by.css('a[title=Addresses]'));
        this.button_my_personal_information = element(by.css('a[title=Information]'));
        this.button_my_wishlists = element(by.css('a[title$=wishlists]'));
    }

    //structure functions
    button_order_history_and_datails_click_on(){
        this.button_order_history_and_datails.click();
    }

    button_my_credit_slips_click_on(){
        this.button_my_credit_slips.click();
    }

    button_my_addresses_click_on(){
        this.button_my_addresses.click();
    }

    button_my_personal_information_click_on(){
        this.button_my_personal_information.click();
    }

    button_my_wishlists_click_on(){
        this.button_my_wishlists.click();
    }
    
    //business functions
   
    
}

module.exports = AccountPage;