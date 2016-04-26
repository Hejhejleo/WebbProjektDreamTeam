var angularAdmin = angular.module('angularAdmin', ['ngRoute']);

// configure our routes
angularAdmin.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'framsida.html',
            controller  : 'mainController'
        })

        .when('/framsida', {
            templateUrl : 'framsida.html',
            controller  : 'mainController'
        })

        .when('/skapa', {
            templateUrl : 'skapaEllerRedigeraProv.html',
            controller  : 'skapaController'
        })

        .when('/statistik', {
            templateUrl : 'statistik.html',
            controller  : 'statistikController'
        })

        .when('/användare', {
            templateUrl : 'användare.html',
            controller  : 'användareController'
        });

});

// create the controller and inject Angular's $scope
angularAdmin.controller('mainController', function($scope) {
   
});

angularAdmin.controller('skapaController', function($scope) {
    
});

angularAdmin.controller('statistikController', function($scope) {

});

angularAdmin.controller('användareController', function($scope) {

});


