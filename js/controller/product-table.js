"use strict";

angular.module('mmi').controller('productTable', productTable);

function productTable($scope, $http, mmiFactory, $state) {
    $scope.data = {};
    var selected_sub_product = mmiFactory.get_selected_sub_product();
    console.log("SELECTED SUB PRODUCT", selected_sub_product);
    $http.get("table.json").then(function (result) {
        var array = result.data;
        console.log(array.length);
        for (var i = 0; i < array.length; i++) {
            console.log(array[i].p_name);
            if (array[i].name == selected_sub_product) {
                console.log("NAMES MATCHED");
                $scope.tableHeader = array[i].table_header;
                $scope.tableBody = array[i].table_body;
                break;
            } else {
                console.log("unequal>", selected_sub_product);
                console.log("unequal>", array[i].name);
            }
        }
    });
}

productTable.$inject = ["$scope", "$http", "mmiFactory"];