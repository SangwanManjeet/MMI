angular.module('mmi').directive('carousel', carousel);

function carousel() {
    var directive = {
        link: link,
        templateUrl: 'partials/carousel.html',
        restrict: 'EA',
        replace : true
    };
    return directive;

    function link(scope, element, attrs) {

    }
}