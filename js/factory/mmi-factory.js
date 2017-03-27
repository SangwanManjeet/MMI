"use strict";

angular.module('mmi').factory('mmiFactory',  mmiFactory);

function mmiFactory() {    
    var factory = {};        
    factory.selected_product ='';
    factory.set_selected_product = function(value){
        factory.selected_product = value;
    }
    factory.get_selected_product = function(){
        return factory.selected_product;
    }
        
    return factory;
}