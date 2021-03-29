(function(){
    'use strict';
    angular.module('public')
    .service('SingleCourseService' , SingleCourseService);
    SingleCourseService.$inject = ['$http' , "MyWebsiteDomain"];
    function SingleCourseService($http ,MyWebsiteDomain){
        
    }

})();