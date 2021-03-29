(function(){
    'use strict';
    angular.module('public')
    .controller('CoursesController' , CoursesController);
    CoursesController.$inject = ['$scope','courses' , 'page'];
    function CoursesController($scope,courses , page){
        var cnt = this;
        cnt.items_in_one_page = 9;
        //cnt.coursescount = 245;
        
        $scope.courses = [];;
        for(var i=0;i<245;i++){
            $scope.courses[i] ={
                id:i+1,
                title :'title'+String(i+1),
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            };
        }
        if($scope.courses.length % cnt.items_in_one_page == 0){
            cnt.number_of_pages = parseInt($scope.courses.length / cnt.items_in_one_page);
        }else{
            cnt.number_of_pages = parseInt($scope.courses.length / cnt.items_in_one_page) + 1; 
        }
        
        cnt.courseFlag = {
            start:0,
            end:cnt.items_in_one_page
        }
        $scope.CoursesFrameSelector = function(){
            var resultArray = $scope.courses.slice(cnt.courseFlag.start+cnt.items_in_one_page*(page-1),cnt.courseFlag.end*page);
            console.log([cnt.courseFlag.start*(page-1),cnt.courseFlag.end*page]);
            //$scope.apply();
            return resultArray; 
        };
        // cnt.courses = function(){
        //     var n = 0;
        //     var courses_in_page = [];
        //     var courses_in_pages = [];
        //     for(var i = 0; i < courses.length;i++){
        //         console.log(i);
        //         if(n == cnt.items_in_one_page || i == courses.length -1){
        //             courses_in_pages.push(courses_in_page)
        //             courses_in_page = [];
        //             console.log('boom')
        //         }
        //         courses_in_page[n] = courses[i];
        //         n = n+1;
        //     }
        //     cnt.number_of_pages = (courses_in_pages.length);
        //     console.log(cnt.number_of_pages);
        //     return courses_in_pages[page-1];
        // };

        

        
    }
})();