'use strict';

angular.module('xublime', ['ngRoute']).

config(function ($routeProvider) {
  
  $routeProvider.

  when('/', {
    templateUrl: 'partials/home.html'
  }).

  otherwise({
    redirectTo: '/',
  });
});