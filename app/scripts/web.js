'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute']);

eventsApp.config(function($routeProvider){
    $routeProvider
        .when('/homepage',{
            templateUrl: 'homepage.html',
            controller: 'maincontroller'
        })
        .when('/gallery',{
            templateUrl: 'gallery.html',
            controller: 'maincontroller'
        })
        .when('/about',{
            templateUrl: 'about.html',
            controller: 'maincontroller'
        })
        .when('/portfolio',{
            templateUrl: 'portfolio.html',
            controller: 'maincontroller'
        })
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'maincontroller'
        })
        .otherwise({redirectTo: '/homepage'})
})