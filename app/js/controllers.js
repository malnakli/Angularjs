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

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        //$http.get('phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});

        // What is returned synchronously is a "future" — an object, which will be filled with data when the XHR response returns.
        // Because of the data-binding in Angular we can use this future and bind it to our template. Then, when the data arrives,
        // the view will automatically update.
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        console.log($routeParams.phoneId)
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);