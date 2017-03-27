"use strict";

angular.module('mmi').controller('product', product);

function product($scope,$http,mmiFactory,$state) {    
    $scope.data = {};         
    $http.get("categories.json").then(function(categories){        
        $scope.data.categories = Object.keys(categories.data);
    })
    $scope.clickHandler = function(value){        
        mmiFactory.set_selected_product(value);        
    }    
}