'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute']);

eventsApp.config(function($routeProvider){
    $routeProvider
        .when('/homepage',{
            templateUrl: 'homepage.html',
            controller: 'maincontroller'
        })
        .otherwise({redirectTo: '/homepage'})
})