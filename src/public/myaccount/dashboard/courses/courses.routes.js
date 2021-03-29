(function(){
    'use strict';
    angular.module('dashboard')
    .config(routeConfig);
    routeConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];
    function routeConfig($stateProvider , $urlRouterProvider){
        $stateProvider
        .state('myCourses' , {
            url:"/my-courses",
            template:"myCourses"
        })
        .state('singleCourse' , {
            url:"/single-course",
            template:'single-course'
        }) //$stateParams
        .state('singleCourse.weeks' , {
            url:"/single-course/{week}",
            template:'single-course'
        })
    }
})();