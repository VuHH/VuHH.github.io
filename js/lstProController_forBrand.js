var app = angular.module('myApp', []);
var listProductObject = [
	{id:"1", name:"Bobby compact anti-theft backpack, pastel blue", price:"$94.95",href_product:"Product_ForBrand/product_forbrand_1.html",images:"images/brand-1/brand-1.jpg"},
	{id:"2", name:"Bobby compact anti-theft backpack, coralette", price:"$94.95",href_product:"Product_ForBrand/product_forbrand_2.html",images:"images/brand-2/brand-2.jpg"},
	{id:"3", name:"Bobby compact anti-theft backpack, diver blue", price:"$94.95",href_product:"Product_ForBrand/product_forbrand_3.html",images:"images/brand-3/brand-3.jpg"},
	{id:"4", name:"Bobby compact anti-theft backpack, primrose yellow", price:"$94.95",href_product:"Product_ForBrand/product_forbrand_4.html",images:"images/brand-4/brand-4.jpg"},
	{id:"5", name:"Bobby anti-theft backpack, black", price:"$89.95",href_product:"Product_ForBrand/product_forbrand_5.html",images:"images/brand-5/brand-5.jpg"},
	{id:"6", name:"Bobby anti-theft backpack, grey", price:"$89.95",href_product:"Product_ForBrand/product_forbrand_6.html",images:"images/brand-6/brand-6.jpg"},
]
app.controller('myCtrl', function($scope) {
    $scope.products = listProductObject;
});