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

        .when('/anvandare', {
            templateUrl : 'anvandare.html',
            controller  : 'anvandareController'
        })

        .when('/createTest', {
            templateUrl : 'createTest.html',
            controller  : 'createController'
        })
        
        .when('/tilldela', {
        templateUrl : 'tilldela.html',
        controller  : 'tilldelaController'
    });

});

// create the controller and inject Angular's $scope
angularAdmin.controller('mainController', function($scope) {
   
});

angularAdmin.controller('skapaController', function($scope) {
    
});

angularAdmin.controller('statistikController', function($scope) {

});

angularAdmin.controller('anvandareController', function($scope) {

});

angularAdmin.controller('tilldelaController', function($scope) {

});

angularAdmin.controller('createController', function($scope) {

});


