(function(){

    'use strict';

    

      angular.module('serviceManagaerApp',["ui.bootstrap"])

      .controller('taskController', taskInitializationFunc )

       

    taskInitializationFunc.$inject= ['$scope']

      

       

      function taskInitializationFunc($scope) {

 

         // var vm =  $scope;

 

          $scope.taskInfo= [

              { 

                                                                  id:0,

                  title : "Release",

                   Name : "A",

                   Description : "Test",

                                                                   isActive : 1

              },

              { 

                                                      id:1,

                  title: "Release1",

                  Name: "A",

                  Description: "Test",

                                                                  isActive : 0

              },

              {

                                                                id:2,

                  title: "Release2",

                  Name: "A",

                  Description: "Test",

                                                                  isActive : 0

              },

               { 

                                                   id:3,

                   title: "Release3",

                   Name: "A",

                   Description: "Test",

                                                                  isActive : 0

              },

              

          ];

          

        // vm.setProgressBarStart=false;

          

       

        

                                $scope.initalValue= "0";

        $scope.showProgress = showProgessFunc;

                   

        function showProgessFunc(item, index) {

                                

           angular.forEach($scope.taskInfo, function(value, key) {

                                                value.isActive= 0;                                                                                                                                                                                                                                                                

                                                });

                                                

                                                angular.forEach($scope.taskInfo, function(value, key) {

                                       if(value.id==(index+1))

                                                   {

                                                                                value.isActive= 1;                                                                                                                                                             

                                                   }                                                                                              

                                                });

                                                

                                console.log($scope.taskInfo);

                                                

        }

       

      }; 

    

    

})();

