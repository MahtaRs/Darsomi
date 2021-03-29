(function(){
    'use strict';
    angular.module('profileCourses')
    .controller('ProfileCoursesController' , CoursesController);
    function CoursesController(){
        var cntrl = this;
        cntrl.name = 'cocco';
        cntrl.vidplayerdetails = {
            responsive:true
        };
    }
})();