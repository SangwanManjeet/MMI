"use strict";

angular.module('mmi').controller('productDetail', productDetail);

function productDetail($scope,$http,mmiFactory,$state) {    
    $scope.data = {};    
    $http.get("categories.json").then(function(categories){
        console.log(mmiFactory.get_selected_product());
        $scope.data.products = categories.data[mmiFactory.get_selected_product()];
        $state.go('product-detail');
    });
}

product.$inject = ["$scope","$http","mmiFactory"];