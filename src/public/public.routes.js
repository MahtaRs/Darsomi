(function(){
    'use strict';
    angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
  function routeConfig ($stateProvider , $urlRouterProvider) {
    // Routes
    $stateProvider
      .state('home', {
        url:"/",
        templateUrl: 'src/public/home/home.template.html'
      })
      .state('shop' , {
        url:"/shop",
        abstract:true,
        templateUrl: "src/public/shop/shop.template.html"
      })
      .state('shop.courses' , {
        url:"/courses",
        templateUrl: "src/public/shop/courses/courses.template.html"
      })
      .state('myAccount',{
        url:"/my-account",
        abstract:true,
        templateUrl: "src/public/myaccount/myaccount.template.html"
        //,redirectTo: '.login'
      })
      .state("myAccount.login" , {
        url:"/login",
        templateUrl:"src/public/myaccount/login/login.template.html"
      })
      .state('myAccount.dashboard' , {
        url:"/dashboard",
        templateUrl:"src/public/myaccount/dashboard/dashboard.template.html"
      });
  }
})();