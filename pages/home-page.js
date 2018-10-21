
class HomePage {

    constructor(){
        this.signin = element(by.css('a[class=login'));
    
    }

    //structure functions
    access_sign_in(){
        this.signin.click();
    }

    //business functions
   
    
}

module.exports = HomePage;