(function(){
    'use strict';
    angular.module('mailBox')
    .controller('MailBoxController' , MailBoxController);
    function MailBoxController(){
        var cntrl = this;
        cntrl.name = 'loco';
    }
})();