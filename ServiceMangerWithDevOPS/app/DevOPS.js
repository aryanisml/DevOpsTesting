(function(){
    'use strict';
    
      angular.module('serviceManagaerApp',["ui.bootstrap"])
      .controller('taskController', taskInitializationFunc )
       
    taskInitializationFunc.$inject= ['$timeout']
      
       
      function taskInitializationFunc($timeout) {

          
          var vm =  this;
          


          vm.taskInfo= [
              { 
                  title : "Release",
                   Name : "A",
                   Description : "Test"
              },
              { 
                  title: "Release1",
                  Name: "A",
                  Description: "Test"
              },
              {
                  title: "Release2",
                  Name: "A",
                  Description: "Test"
              },
               { 
                   title: "Release3",
                   Name: "A",
                   Description: "Test"
              },
              
              
          ];
          
        // vm.setProgressBarStart=false;
          
        vm.showProgress = showProgessFunc;
        
       
        
        function showProgessFunc(event) {
            vm.setProgressBarStart=true;
            alert(event.target.id);
                // var amt = 100;
  
                // vm.countTo = amt;
                // vm.countFrom = 0;
  
                // $timeout(function(){
                //         vm.progressValue = amt;
                //         }, 100);
        
        }
       
      }; 
    
    
})();