(function(){
    'use strict';
    angular.module('public')
    .controller('CartController' , CartController);
    CartController.$inject = ['$scope'];
    function CartController($scope){
        $scope.cartnumber = 1;
        $scope.itemsInCart = [
            {
                id:1,
                name:"Course 1",
                pic:"media/pic/1.jpg",
                institute:"Sharif Institute Of Technology",
                price:13000,
                off:3000
            },
            {
                id:3,
                name:"Course 3",
                pic:"media/pic/1.jpg",
                institute:"Sharif Institute Of Technology",
                price:13000,
                off:3000
            },
            {
                id:5,
                name:"Course 5",
                pic:"media/pic/1.jpg",
                institute:"Sharif Institute Of Technology",
                price:13000,
                off:3000
            }
        ];
        $scope.deleteItemFromCart = function(index){
            $scope.itemsInCart.splice(index,1);
        }
        $scope.cartCalculator = function(adj){
            var result = 0;
            if(adj == "price"){
                $scope.itemsInCart.forEach(function(value,index,array){
                    result =  result + value.price - value.off;
                });
            }else if(adj == "totalPrice"){
                $scope.itemsInCart.forEach(function(value,index,array){
                    result =  result + value.price;
                });

            }else if(adj == "totalOff"){
                $scope.itemsInCart.forEach(function(value,index,array){
                    result =  result + value.off;
                });

            }
            return result;
        }
    }
})();