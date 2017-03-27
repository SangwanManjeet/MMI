angular.module('mmi').directive('mmiFooter', mmiFooter);

function mmiFooter() {
    var directive = {
        link: link,
        templateUrl: 'partials/footer.html',
        restrict: 'EA',
        replace : true
    };
    return directive;

    function link(scope, element, attrs) {

    }
}