(function(){
    'use strict';
    angular.module('dashboard')
    .config(routeConfig);
    routeConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
    function routeConfig( $stateProvider ,$urlRouterProvider){
        $stateProvider
        .state('dashboard',{
            url:'/dashboard',
            //abstract:true,
            redirectTo:"dashboard.courses",
            templateUrl:"src/public/myaccount/dashboard/dashboard.template.html"
        })
        .state('dashboard.courses',{
            url:'/courses',
            templateUrl:"src/public/myaccount/dashboard/courses/courses.template.html",
            controller:"ProfileCoursesController as cntrl"
        })
        .state('dashboard.achievments',{
            url:'/achievments',
            templateUrl:"src/public/myaccount/dashboard/achievments/achievments.template.html",
            controller:"AchievmentsController as cntrl"
        })
        .state('dashboard.profile',{
            url:'/profile',
            templateUrl:"src/public/myaccount/dashboard/profile/profile.template.html",
            controller:"ProfileController as cntrl"
        })
        .state('dashboard.mailBox',{
            url:'/mailbox',
            templateUrl:"src/public/myaccount/dashboard/mailbox/mailbox.template.html",
            controller:"MailBoxController as cntrl"
        });
    }
})();