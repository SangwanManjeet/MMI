"use strict";

angular.module('mmi', ['ui.router']).config(config);
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'home'
    }).state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
    }).state('products', {
        url: '/products',
        templateUrl: 'partials/products.html',
        controller: 'product'
    }).state('product-detail', {
        url: '/products-detail',
        templateUrl: 'partials/product-detail.html',
        controller: 'productDetail'
    }).state('product-table', {
        url: '/products-table',
        templateUrl: 'partials/product-table.html',
        controller: 'productTable'
    });

}