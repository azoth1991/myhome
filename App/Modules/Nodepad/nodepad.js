/**
 * Created by azoth on 15/7/20.
 */
'use strict';
angular.
    module("NodepadModules",[])
    .config(["$StateProvider"],function($StateProvider){
      $StateProvider
        .state('nodepad',{
          url:'/nodepad',
          views:{
            "main@nodepad":{
              templateUrl:"Modules/Nodepad/nodepad.html",
              controller:'NodepadController'
            }
          }
        })

  });