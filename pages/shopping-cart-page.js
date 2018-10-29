//^ = começa com
//$ = termina com
//* = contém

class ShoppingCartPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';
        this.textearea_comment_buy = element(by.css('textarea[name=message]'));
        this.button_checkout_summary = element.all(by.css('a[title$=checkout]')).last();
        this.button_checkout_address = element(by.css('button[name=processAddress]'));
        this.button_checkout_shipping = element(by.css('button[name=processCarrier]'));
        this.button_checkout_payment = element(by.css('button[class$=button-medium]'));
        this.check_agree_the_terms = element(by.id('cgv'));
        this.button_pay_bank_wire = element.all(by.css('.payment_module')).first();
        this.button_pay_check = element.all(by.css('.payment_module')).last();
        this.button_back_orders = element(by.css('a[title$=orders]'));
        this.alert_purchase_success = element(by.css('p[class$=alert-success]'));
        
    }

    //structure functions
    button_checkout_summary_click_on(){
       this.button_checkout_summary.click();
    }

    button_checkout_address_click_on(){
        this.button_checkout_address.click();
    }

    button_checkout_shipping_click_on(){
        this.button_checkout_shipping.click();
    }

    button_checkout_payment_click_on(){
        this.button_checkout_payment.click();
    }

    check_agree_the_terms_click_on(){
        this.check_agree_the_terms.click();
    }

    button_pay_bank_wire_click_on(){
        this.button_pay_bank_wire.click();
    }

    button_pay_check_click_on(){
        this.button_pay_check.click();
    }

    button_back_orders_click_on(){
        this.button_back_orders.click();
    }

    

    //business functions
    purchase_feedback(coment){
       this.textearea_comment_buy.sendKeys(coment);
    }
   
}

module.exports = ShoppingCartPage;