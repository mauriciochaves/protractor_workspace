
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const AccountPage = require('../pages/account-page');
const MyWishlistsPage = require('../pages/mywishlists-page');

describe('Since I gained access with my user', function(){

  const login_page = new LoginPage();
  const home_page = new HomePage();
  const account_page = new AccountPage();
  const my_wishlists_page = new MyWishlistsPage();

  beforeEach(function(){
   browser.get(login_page.path);
   home_page.access_sign_in();
  });

  it('when I want to register a My Wishlist', function(){
      
    
    login_page.log_in('test23_mcsj@teste.com','teste12345');
    account_page.button_my_wishlists_click_on();
    my_wishlists_page.create_wishlist('My Wishlists Name');
    home_page.add_wishlist_products_menu_women();
    home_page.button_account_click_on();
    account_page.button_my_wishlists_click_on();
 
    expect(my_wishlists_page.grid_name.getText()).toEqual('My Wishlists Name');
  });

});