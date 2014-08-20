'use strict';

angular.module('heatWorks', ['ngRoute']).

config(function ($routeProvider) {
  
  $routeProvider.

  when('/', {
    templateUrl: 'partials/home.html'
  }).

  otherwise({
    redirectTo: '/',
  });
});