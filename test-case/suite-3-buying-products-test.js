
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const ShoppingCartPage = require('../pages/shopping-cart-page');
const OrderHistoryPage = require('../pages/order-history-page');

describe('Dado que obtive acesso com o meu usuario', function(){

  const login_page = new LoginPage();
  const home_page = new HomePage();
  const shopping_cart = new ShoppingCartPage();
  const order_history = new OrderHistoryPage();

  var originalTimeout;

  beforeEach(function(){
   browser.get(login_page.path);
   originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });


  it('efetuo uma compra e faço uma alteração na ordem gerada', function(){
      
    home_page.access_sign_in();
    login_page.log_in('test28_mcsj@teste.com','teste12345');
    home_page.add_cart_products_menu_women();
    home_page.button_cart_click_on();
    shopping_cart.button_checkout_summary_click_on();
    shopping_cart.purchase_feedback('Could you send me the tracking code of the products Im buying? Thank you and have a good day.');
    shopping_cart.button_checkout_address_click_on();
    shopping_cart.check_agree_the_terms_click_on();
    shopping_cart.button_checkout_shipping_click_on();
    shopping_cart.button_pay_bank_wire_click_on();
    shopping_cart.button_checkout_payment_click_on();
    shopping_cart.button_back_orders_click_on();
    order_history.button_reorder_click_on();
   
    home_page.add_cart_product_menu_women();
    home_page.button_cart_click_on();
    shopping_cart.button_checkout_summary_click_on();
    shopping_cart.purchase_feedback('Reopen the payment order because I needed an adjustment, could I get the new tracking code? thanks for listening.');
    shopping_cart.button_checkout_address_click_on();
    shopping_cart.check_agree_the_terms_click_on();
    shopping_cart.button_checkout_shipping_click_on();
   
    shopping_cart.button_pay_check_click_on();
    shopping_cart.button_checkout_payment_click_on();
 
    expect(shopping_cart.alert_purchase_success.getText()).toEqual('Your order on My Store is complete.');
    home_page.button_sign_out_click_on();
    expect(login_page.page_header.getText()).toEqual('AUTHENTICATION');
    

  });


});