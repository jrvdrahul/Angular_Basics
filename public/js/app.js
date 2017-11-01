var app= angular.module("myApp",['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: '/views/home.html'
        })
        .when('/', {
            url: '/',
            controller: 'MainController',
            templateUrl: '/views/home.html'
        })
        .when('contactUs', {
            url: '/contactUs',
            templateUrl: '/views/contactUs.html'
        })

});
