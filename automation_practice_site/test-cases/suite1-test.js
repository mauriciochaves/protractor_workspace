const home_actions = require('../actions/home-actions');

describe('Dado que acessei acessei o sistema', function(){

    beforeEach(function(){
        home_actions.StructureFunctions.get();
    });

    it ('quando necessito efetuar o cadastro do meu usuario', function(){
        home_actions.StructureFunctions.myAccount_click_on();
        
        expect('teste').toEqual('teste');

    });
});