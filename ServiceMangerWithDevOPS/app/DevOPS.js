(function () {

    'use strict';



    angular.module('serviceManagaerApp', ['angular.directives-round-progress'])

    .controller('taskController', taskInitializationFunc)



    taskInitializationFunc.$inject = ['$scope' ,'serviceManagerFactory' ]





    function taskInitializationFunc($scope, serviceManagerFactory) {



        // var vm =  $scope;
        $scope.roundProgressData = {
            label: 0,
            percentage: 0.00
        }

        // Here I synchronize the value of label and percentage in order to have a nice demo
        $scope.$watch('roundProgressData', function (newValue, oldValue) {
            newValue.percentage = newValue.label / 100;
        }, true);
        
        $scope.taskInfo = [

            {

                id: 0,

                title: "Release",

                Name: "A",

                Description: "Test",

                isActive: 1

            },

            {

                id: 1,

                title: "Release1",

                Name: "A",

                Description: "Test",

                isActive: 0

            },

            {

                id: 2,

                title: "Release2",

                Name: "A",

                Description: "Test",

                isActive: 0

            },

             {

                 id: 3,

                 title: "Release3",

                 Name: "A",

                 Description: "Test",

                 isActive: 0

             },

             {

                 id: 4,

                 title: "Release4",

                 Name: "A",

                 Description: "Test",

                 isActive: 0

             },

             {

                 id: 5,

                 title: "Release4",

                 Name: "A",

                 Description: "Test",

                 isActive: 0

             },


        ];
 
       
       
  serviceManagerFactory.getServiceTask()
    .then(
      function(result) {
        // promise was fullfilled (regardless of outcome)
        // checks for information will be peformed here
       window.alert(result);
      },
      function(error) {
        // handle errors here
        console.log(error);
      }
    );
       
       
       
                      
        $scope.initalValue = "0";
        $scope.showProgress = showProgessFunc;
        var values = $scope.taskInfo.length;
        values = 100 / $scope.taskInfo.length;
        var intervalValues = values;
        function showProgessFunc(item, index) {
            var precision = Math.abs(parseInt(0)) || 0;
            var multiplier = Math.pow(10, precision);
            values= (Math.round(values * multiplier) / multiplier);


            $scope.roundProgressData.label = values;
            angular.forEach($scope.taskInfo, function (value, key) {

                value.isActive = 0;

            });
            angular.forEach($scope.taskInfo, function (value, key) {

                if (value.id == (index + 1)) {

                    value.isActive = 1;

                }

            });

            values = values + intervalValues;
            
            console.log($scope.taskInfo);


        }



    };





})();


