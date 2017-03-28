"use strict";

angular.module('mmi').controller('productDetail', productDetail);

function productDetail($scope,$http,mmiFactory) {    
    $scope.data = {};    
    $http.get("categories.json").then(function(categories){
        console.log(mmiFactory.get_selected_product());
        $scope.data.products = categories.data[mmiFactory.get_selected_product()];
    });
    $scope.clickHandler = function(value){        
        mmiFactory.set_selected_sub_product(value);        
    }
}

product.$inject = ["$scope","$http","mmiFactory"];