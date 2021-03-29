(function(){
    'use strict';
    angular.module('public')
    .controller('SingleCourseController', SingleCourseController);
    SingleCourseController.$inject = ['$scope', 'SingleCourseService' , 'id'];
    function SingleCourseController($scope , SingleCourseService , id){
        $scope.id = id;
        $scope.trendingCourses = [
            {
                title:'title1',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title2',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title3',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title4',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title5',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            }
        ];
        $scope.picsInLine = [
            {
                src:"media/pic/1.jpg"
            },
            {
                src:"media/pic/2.jpg"
            }

        ];
        $scope.bestSellingCourses = [
            {
                title:'title1',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title2',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title3',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title4',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            },
            {
                title:'title5',
                pic:'',
                institute:'ins1',
                price:'15000',
                capacity:'15/35',
                duration:'23',
                weeks:'3'
            }
        ];
        $scope.nOfCardsInSlider = 0;
        $scope.width = window.innerWidth;
        $scope.height = window.innerHeight;
        document.querySelector('.picsInLineToSee').scrollLeft =  0;
        //$scope.pr = '';
        if($scope.width >= 1200){
            $scope.nOfCardsInSlider = 2;
        }else if($scope.width >= 1000 && $scope.width < 1200){
            $scope.nOfCardsInSlider = 2;
        }
        else if($scope.width < 1000 && $scope.width >= 800){
            $scope.nOfCardsInSlider = 1;
        }else if($scope.width < 800){
            $scope.nOfCardsInSlider = 1;
        }
        $scope.carFlags = {
            trendingCourses: {
                start:0,
                end:$scope.nOfCardsInSlider
            },
            bestSellingCourses:{
                start:0,
                end:$scope.nOfCardsInSlider
            }

        };
        // var oneCardInSlider = document.getElementsByClassName('oneCardInSlider');
        // var cardSlider = document.getElementsByClassName('cardSlider');
        // for(i =0; i < oneCardInSlider.length;i++){
        //     oneCardInSlider.style.width = parentElement/
        // }
        // console.log(cardSliderWidth);
        // document.getElementsByClassName('oneCardInSlider').style.width =parseInt((cardSliderWidth * 9/10) /$scope.nOfCardsInSlider)
        console.log(document.getElementsByClassName('oneCardInSlider'));

        window.addEventListener('resize' , function(){
            $scope.width = window.innerWidth;
            $scope.height = window.innerHeight;
            if($scope.width >= 1200){
                $scope.nOfCardsInSlider = 2;
            }else if($scope.width >= 1000 && $scope.width < 1200){
                $scope.nOfCardsInSlider = 2;
            }
            else if($scope.width < 1000 && $scope.width >= 800){
                $scope.nOfCardsInSlider = 1;
            }else if($scope.width < 800){
                $scope.nOfCardsInSlider = 1;
            }
            
            $scope.carFlags.trendingCourses.end = $scope.carFlags.trendingCourses.start+$scope.nOfCardsInSlider;
            $scope.carFlags.bestSellingCourses.end = $scope.carFlags.bestSellingCourses.start+$scope.nOfCardsInSlider;
            console.log($scope.carFlags);
            $scope.$apply();
            
        });
        $scope.ArrayFrameSelector = function(input_array,flag){
            //$scope.trendingCourseMark
            var frame_size = $scope.nOfCardsInSlider;
            var resultArray = input_array.slice(flag.start,flag.end);
            return resultArray;
        }
        $scope.ArrayFrameSweeper = function(input_array,flag,action){
            console.log(flag);
            var frame_size = $scope.nOfCardsInSlider;
            if(action == 1 && flag.end+1 <=input_array.length){
                flag.end = flag.end +1;
                flag.start = flag.start+1;

            }else if(action == 1 && flag.end+frame_size > input_array.length){

            }
            else if(action == 0 && flag.start > 0){
                if(flag.start - 1 >= 0){
                    flag.start = flag.start - 1;
                    flag.end = flag.end -1;
                }
                
            }
        }
        
        $scope.scroller = function(selector,direction , distance = 50){
            var scrollable = document.querySelector(String(selector));
            //console.log(selector,scrollable);
            console.log(scrollable.scrollLeft);
            if(direction == 1){
                scrollable.scrollTo({
                    left:scrollable.scrollLeft+distance,
                    behavior:'smooth'
                });
                // scrollable.scrollLeft = scrollable.scrollLeft +10;
            }else if(direction == 0){
                scrollable.scrollTo({
                    left:scrollable.scrollLeft-distance,
                    behavior:'smooth'
                });
                // scrollable.scrollLeft = scrollable.scrollLeft -10;
            }
        }
        $scope.picInFocusSelector = function(src){
            //console.log(image);
            //var src = image.getAttribute('src');
            document.getElementById("picInFocusToSee").setAttribute('src' , src);
        }
        $scope.get_attribute= function(id , attr){
            return document.getElementById(id).getAttribute(attr);
        }
        // $scope.handleTickInit= function(tick) {

        //     Tick.helper.interval(function(){
        //         var d = Tick.helper.date();
        //         tick.value = {
        //             sep: '.',
        //             hours: d.getHours(),
        //             minutes: d.getMinutes(),
        //             seconds: d.getSeconds()
        //         };
        //     });
        // }
          
    }
})();