/**
 * Created by moair on 15-02-09.
 */


//phonecatApp.controller('PhoneListCtrl', function ($scope,$http) {
//    console.log($scope);
//    //$scope.phones = [
//    //    {'name': 'Nexus S',
//    //        'snippet': 'Fast just got faster with Nexus S.',
//    //        'age': 1},
//    //    {'name': 'Motorola XOOM™ with Wi-Fi',
//    //        'snippet': 'The Next, Next Generation tablet.',
//    //        'age': 2},
//    //    {'name': 'MOTOROLA XOOM™',
//    //        'snippet': 'The Next, Next Generation tablet.',
//    //        'age': 3}
//    //];
//
//    $http.get('phones/phones.json').success(function(data) {
//        $scope.phones = data;
//    });
//    //sets the default value of orderProp to age
//    $scope.orderProp = 'age';
//});

// an alternative way
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        console.log($routeParams.phoneId)
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
    }]);