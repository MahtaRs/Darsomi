(function(){
    'use strict';
    angular.module('public')
    .component('courseInShop', {
        templateUrl: 'src/public/shop/courses/course.component.html',
        bindings: {
            course: '='
          }
    });
})();