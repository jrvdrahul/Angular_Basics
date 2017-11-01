var app = angular.module("myApp");

app.directive("demoHeader",function(){
    return{
        restrict: 'EA',
        controller: 'MainController',
        templateUrl:'/views/header.html'
    };
});

app.directive("footer",function(){
    return{
        restrict: 'EA',
        controller: 'MainController',
        templateUrl:'/views/footer.html'
    };
});