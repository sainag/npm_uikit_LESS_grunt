angular.module('la-trobe-ebureau',[])
  .controller('contact-library',['$scope','$http',function($scope, $http){
    $scope.formData = [];
    $scope.setFields = function(){
      $scope.name = '';
      $scope.email = '';
      $scope.message = '';
    };
    $scope.setFields();
    $scope.success = false;
    $scope.failure = false;
    $scope.submit = function(){
        $scope.dname = $scope.name;
        $scope.formData = {name:$scope.name, email:$scope.email, message:$scope.message};
        $http({
          method: 'POST',
          url: 'php/email.php',
          data: $.param($scope.formData),
          dataType:'json',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(response){
          var data = response.data;
          if(data.result)  $scope.success = true;
          else $scope.failure = true;
          $scope.setFields();
          $scope.form.$setPristine();
          $scope.form.$setUntouched();
        }, function errorCallback(response) {
          $scope.failure = true;
        });
    };
  }]);
