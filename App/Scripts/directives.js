'use strict';
/**
 * 指令模块
 */
angular
  .module('DirectiveModule', [])
/**
 * 切换页面时 Loading
 */
  .directive('pagerLoading', ['$rootScope', function($rootScope) {
    return {
      restrict: "C",
      link: function(scope, elem) {
        $rootScope.$on('$stateChangeStart', function() {
          $(elem).show();
        });

        $rootScope.$on('$stateChangeSuccess', function() {
          $(elem).hide();
        });
      }
    };
  }]);