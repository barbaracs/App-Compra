angular.module('food.services',[])
.service('apiServices', function($http,$q){
  var baseURL = "http://localhost:3000/";

  var req = {
   method: 'GET',
   url: baseURL,
   headers: { }
  };

  this.call = function(resto){
    var def = $q.defer();
    req.url = baseURL + resto;
    $http(req).success(function(data){
      def.resolve(data);
    }).error(function(data, status){
      def.reject("error-do-api-call-" + status);
    });
    return def.promise;
  }

  this.post = function(resto,values){
    var def = $q.defer();
    var reqpost = {
      method: 'POST',
      url: baseURL,
      data: values
    }
    reqpost.url = baseURL + resto + values;
    $http(reqpost).success(function(data){
      def.resolve(data);
    }).error(function(data, status){
      def.reject("error-do-api-call-" + status);
    });
    return def.promise;
  }

});
