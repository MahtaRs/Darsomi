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
        templateUrl: 'src/public/home/home.template.html',
        controller:"HomeController as cntrl"
      })
      .state('shop' , {
        url:"/shop",
        //abstract:true,
        templateUrl: "src/public/shop/shop.template.html",
        redirectTo: 'shop.courses'
      })
      .state('shop.courses' , {
        url:"/courses/{page}",
        templateUrl: "src/public/shop/courses/courses.template.html",
        controller:"CoursesController as Corcn",
        params:{
          page:{
            type:'int',
            value:1
          }
        },
        resolve:{
          courses:['CoursesService' , function(CoursesService){
            return CoursesService.retrieveAllCourses();
          }],
          page:['$stateParams' , function ($stateParams){
            return $stateParams.page;
          }]
        }
      })
      .state('shop.singleCourse',{
        url:"/course/{id}",
        templateUrl:'src/public/shop/course/single-course.template.html',
        controller:"SingleCourseController as cntrl",
        params:{
          id:{
            type:'int'
          }
        },
        resolve:{
          id:['$stateParams' , function($stateParams){
            return $stateParams.id;
          }]
        }
      })
      .state('myAccount',{
        url:"/my-account",
        templateUrl: "src/public/myaccount/myaccount.template.html"
        ,redirectTo: 'myAccount.login'
      })
      .state("myAccount.login" , {
        url:"/login",
        templateUrl:"src/public/myaccount/login/login.template.html",
        controller:"LoginController as cntrl"
      })
      .state("myAccount.signup" , {
        url:"/signup",
        templateUrl:"src/public/myaccount/signup/signup.template.html",
        controller:"SignUpController as cntrl"
      })
      .state('myAccount.dashboard' , {
        url:"/dashboard",
        templateUrl:"src/public/myaccount/dashboard/dashboard.template.html",
        redirectTo:"dashboard.courses"
      })
      .state('cart', {
        url:'/cart',
        templateUrl:"src/public/cart/cart.template.html",
        controller:"CartController as cntrl"
      }
      );
  }
})();