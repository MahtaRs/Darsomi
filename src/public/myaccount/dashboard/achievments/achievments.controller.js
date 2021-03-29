(function(){
    'use strict';
    angular.module('achievments')
    .controller('AchievmentsController' , AchievmentsController);
    function AchievmentsController(){
        var cntrl = this;
        cntrl.name = 'fluffy';
    }
})();