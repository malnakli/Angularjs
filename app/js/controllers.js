/**
 * Created by moair on 15-02-09.
 */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    console.log($scope);
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3}
    ];
    //sets the default value of orderProp to age
    $scope.orderProp = 'age';
});