'use strict';
angular
  .module('NewsModule', [])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home.news', {
        url: '/news',
        views: {
          "main@home": {
            templateUrl: "Modules/News/list.html",
            controller: "NewsListController",
            resolve: {
              news: ['NewsFactory', function(NewsFactory) {
                var obj = new NewsFactory();
                return obj.getAllNews();
              }]
            }
          }
        }
      })
      .state('home.news.add', {
        url: "/add",
        views: {
          "main@home": {
            templateUrl: "Modules/News/form.html",
            controller: "NewsFormController"
          }
        }
      });
  }])
  .factory('NewsFactory', ['$resource', '$q', function($resource, $q) {
    var rs = $resource("../Home/news", {}, {
      edit: {method: "PUT"}
    });
    var delay = $q.defer();

    return function() {
      return {
        getAllNews: function() {
          rs.query(function(data) {
            delay.resolve(data);
          }, function() {
            delay.reject({msg: "操作失败"});
          });

          return delay.promise;
        }
      };
    };
  }])
  .controller('NewsListController', ['$scope', 'news', function($scope, news) {
    $scope.news = news;
    console.log(news);
  }])
  .controller('NewsFormController', ['$scope', '$resource',function($scope,$resource) {
    $scope.save = function () {
      var rs = $resource("../Home/news",{"data":$scope.news});

      console.log('请求发送成功');

    }
  }]);