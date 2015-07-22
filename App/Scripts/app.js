'use strict';
angular
  .module('App', ['ngResource', 'ui.router', 'ui.bootstrap', 'DirectiveModule', 'NewsModule'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        abstract: true,
        views: {
          "": {templateUrl: "Modules/Home/home.html"},
          "menu@home": {templateUrl: 'Modules/Home/menu.html'}
        }
      });

    $urlRouterProvider.otherwise('/news');
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.shoes = {
      isSidebarCollapse: false
    };
  }]);
