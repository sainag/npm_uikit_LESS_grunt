angular.module('la-trobe-ebureau',[])
  .controller('contact-library',['$scope', function($scope){
    $scope.info = [];
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
        $scope.info = [$scope.name, $scope.email, $scope.message];
        $scope.success = true;
        $scope.setFields();
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };
  }]);
