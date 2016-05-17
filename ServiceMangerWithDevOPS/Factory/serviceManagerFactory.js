(function () {

    'use strict';
     

     angular.module('serviceManagaerApp')
     .factory('serviceManagerFactory', serviceManagerFunc);
     
     
     serviceManagerFunc.$inject =['$http', '$q'];
     
     function  serviceManagerFunc($http, $q)
     {
         var service ={};
         service.getServiceTask= getServiceTask;
         return service;
         
         function getServiceTask() {
             var deferred = $q.defer();
             $http.get('http://localhost:7745/api/images')
             .then(function(response){
                 deferred.resolve(response.data );
                 return deferred.promise;
             }, function(response){
                 
             deferred.reject(response);
             return deferred.promise;    
                 
             });
             
         };
         
         
     }   
})();