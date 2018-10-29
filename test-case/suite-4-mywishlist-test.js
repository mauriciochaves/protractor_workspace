
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const CreateAnAccountPage = require('../pages/create-account-page');
const AccountPage = require('../pages/account-page');
const MyWishlistsPage = require('../pages/mywishlists-page');

describe('Dado que obtive acesso com o meu usuario', function(){

  const login_page = new LoginPage();
  const home_page = new HomePage();
  const create_account = new CreateAnAccountPage();
  const account_page = new AccountPage();
  const my_wishlists_page = new MyWishlistsPage();

  beforeEach(function(){
   browser.get(login_page.path);
   home_page.access_sign_in();
  });

  afterEach(function(){
    browser.close();
    
  });

  it('quando ele possui itens cadastrados no MyWishlist', function(){
      
    
    login_page.log_in('test23_mcsj@teste.com','teste12345');
    account_page.button_my_wishlists_click_on();
    my_wishlists_page.create_wishlist('My Wishlists Name');
    home_page.add_wishlist_products_menu_women();
    home_page.button_account_click_on();
    account_page.button_my_wishlists_click_on();
    my_wishlists_page.move_element(my_wishlists_page.grid);
    home_page.button_sign_out_click_on();
    home_page.access_sign_in();
    login_page.log_in('test23_mcsj@teste.com','teste12345');
 
    expect(my_wishlists_page.title_page.getText()).toEqual('My wishlists');
  });

  it('quando ele não possui itens cadastrados no MyWishlist', function(){
      
    
    login_page.log_in('test21_mcsj@teste.com','teste12345');
    account_page.button_my_wishlists_click_on();
    my_wishlists_page.create_wishlist('My Wishlists Name');
    home_page.button_account_click_on();
    account_page.button_my_wishlists_click_on();
    my_wishlists_page.move_element(my_wishlists_page.grid);
    home_page.button_sign_out_click_on();
    home_page.access_sign_in();
    login_page.log_in('test23_mcsj@teste.com','teste12345');
 
    expect(home_page.bar_button_home.getText()).toContain('Popular');
    expect(home_page.bar_button_home.getText()).toContain('Best Sellers');
  });

});