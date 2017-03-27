angular.module('mmi').directive('mmiHeader', mmiHeader);

function mmiHeader() {
    var directive = {
        link: link,
        templateUrl: 'partials/header.html',
        restrict: 'EA',
        replace : true
    };
    return directive;

    function link(scope, element, attrs) {

    }
}