(function(){
    'use strict';
    angular.module('public')
    .service('CoursesService' , CoursesService);
    CoursesService.$inject = ['$http' , "MyWebsiteDomain"];
    function  CoursesService ($http, MyWebsiteDomain){
        var service = this;
        service.courses = [
            {'id':1 , 'name':'JS' , 'des':"course for programming"}
            ,{'id':2 , 'name':'Python' , 'des':"course for programming"}
            ,{'id':3 , 'name':'C++' , 'des':"course for programming"}
            ,{'id':4 , 'name':'C#' , 'des':"course for programming"}
            ,{'id':5 , 'name':'PHP' , 'des':"course for programming"}
            ,{'id':6 , 'name':'HTML' , 'des':"course for programming"}
            ,{'id':7 , 'name':'CSS' , 'des':"course for programming"}
            ,{'id':8 , 'name':'R' , 'des':"course for programming"}
        ];
        service.retrieveAllCourses = function(){
            // MyWebsiteDomain
            
            return $http({
                    method : "POST",
                    url : MyWebsiteDomain + 'Courses/retrieve_courses'
                }).then(function mySuccess(response) {
                    console.log(response.data)
                    return service.courses;
                }, function myError(response) {
                    return  response.statusText;
                });
        }
    }
})();