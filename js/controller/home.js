"use strict";

angular.module('mmi').controller('home', home);

function home($scope) {
    $scope.data = {};
    $scope.data.aboutUs = [
        'We equip smart companies with smarter solutions. Our all-round expertise in torque wrenches tools, torque tools, slugging wrenches, hex drivers, speed braces and other industrial tools has brought about a change in some of the top businesses, setting global milestones as we go.',
        ' Our commitment is to provide best quality industrial torque tools at the most competitive prices has fetched it accolades from its customers spread across the world. Manufacture of industrial tools that suit the exact requirements of our clients ranging from small industries to huge manufacturing units is our forte.'
    ];

    $scope.data.products = [
        {label : "Torque Wrench", path : "img/p1.jpg"},
        {label : '1/4" Sq. Drive Double Hex', path : "img/p2.jpg"},
        {label : 'Swivel Handles', path : "img/p3.jpg"},
        {label : 'Torque Screw Driver', path : "img/p4.jpg"},
        {label : "Torque Wrench", path : "img/p1.jpg"},
        {label : '1/4" Sq. Drive Double Hex', path : "img/p2.jpg"},
        {label : 'Swivel Handles', path : "img/p3.jpg"},
        {label : 'Torque Screw Driver', path : "img/p4.jpg"}
    ];

}