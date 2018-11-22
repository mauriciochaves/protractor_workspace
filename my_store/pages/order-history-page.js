
class OrderHistoryPage {

    constructor(){
        this.path = 'http://automationpractice.com/index.php';

        this.button_reorder = element(by.css('a[title^=Reorder]'));
        
        
    }

    //structure functions
    button_reorder_click_on(){
       this.button_reorder.click();
    }

    //business functions
 

}

module.exports = OrderHistoryPage;