//^ = começa com
//$ = termina com
//* = contém

class MyWishlistsPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';
        this.input_name = element(by.id('name'));
        this.button_save = element(by.id('submitWishlist'));
        this.button_remove = element(by.css('i[class=icon-remove]'));
        this.grid = element.all(by.css('tr')).last();
        this.title_page = element(by.css('.page-heading'));
        
    }

    //structure functions

    //business functions
    create_wishlist(name){
        this.input_name.sendKeys(name);
        this.button_save.click();
    }

    move_element(element){
        browser.actions().mouseMove(element).perform();
    }
}

module.exports = MyWishlistsPage;