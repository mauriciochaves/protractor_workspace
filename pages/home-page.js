
class HomePage {

    constructor(){
        this.button_signin = element(by.css('a[class=login'));
        this.button_dresses = element(by.css('a[title=Dresses]'));
        this.button_women = element(by.css('a[title=Women]'));
        this.button_close_add_sucess_wishlist = element(by.css('a[class*=fancybox-close]'));
        this.button_account = element(by.css('.account'));
        this.button_sign_out= element(by.css('.logout'));
        this.bar_button_home = element(by.css('ul[id=home-page-tabs]'));

       //products
       this.button_product_women_one = element.all(by.css('a[title^=Faded]')).first();
       this.button_product_women_two = element.all(by.css('.product_img_link')).get(5);
       this.button_product_women_three = element.all(by.css('a[title*=Chiffon]')).last();

       this.button_add_product_one_wishlist = element(by.css('a[class*=wishlistProd_1]'));
       this.button_add_product_two_wishlist = element(by.css('a[class*=wishlistProd_6]'));
       this.button_add_product_three_wishlist = element(by.css('a[class*=wishlistProd_7]'));
        
    }

    //structure functions
    access_sign_in(){
        this.button_signin.click();
    }

    button_dresses_click_on(){
        this.button_dresses.click();
    }

    button_women_click_on(){
        this.button_women.click();
    }

    button_add_product_one_wishlist_click_on(){
        this.button_add_product_one_wishlist.click();
    }

    button_add_product_two_wishlist_click_on(){
        this.button_add_product_two_wishlist.click();
    }

    button_add_product_three_wishlist_click_on(){
        this.button_add_product_three_wishlist.click();
    }

    button_account_click_on(){
        this.button_account.click();
    }

    button_sign_out_click_on(){
        this.button_sign_out.click();
    }

    //business functions
    select_products_menu_women(){

        this.button_women.click();
    
        //add product one
        browser.actions().mouseMove(this.button_product_women_one).perform();
        this.button_add_product_one_wishlist.click();
        this.button_close_add_sucess_wishlist.click();

        //add product three
        browser.actions().mouseMove(this.button_product_women_two).perform();
        this.button_add_product_two_wishlist.click();
        this.button_close_add_sucess_wishlist.click();

        //add product three
        browser.actions().mouseMove(this.button_product_women_three).perform();
        this.button_add_product_three_wishlist.click();
        this.button_close_add_sucess_wishlist.click();

    }
    
    
}

module.exports = HomePage;