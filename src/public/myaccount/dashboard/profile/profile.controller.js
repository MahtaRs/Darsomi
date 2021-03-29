(function(){
    'use strict';
    angular.module('profile')
    .controller('ProfileController' , ProfileController);
    function ProfileController(){
        var cntrl = this;
        cntrl.name = 'profily';
    }

})();