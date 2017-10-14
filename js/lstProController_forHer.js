var app = angular.module('myApp', []);
var listProductObject = [
	{id:"1", name:"Leather Black M", price:"$159.00", href_product:"Product_ForHer/product_forher_1.html",images:"images/her-1/her-1.png"},
	{id:"2", name:"Melin Tregwynt Elements S", price:"$139.00", href_product:"Product_ForHer/product_forher_2.html",images:"images/her-2/her-2.png"},
	{id:"3", name:"Melin Tregwynt Halo S", price:"$139.00", href_product:"Product_ForHer/product_forher_3.html",images:"images/her-3/her-3.png"},
	{id:"4", name:"Expedition Atlantic Blue", price:"$115.00", href_product:"Product_ForHer/product_forher_4.html",images:"images/her-4/her-4.png"},
	{id:"5", name:"Expedition Black", price:"$115.00", href_product:"Product_ForHer/product_forher_5.html",images:"images/her-5/her-5.png"},
	{id:"6", name:"Expedition Burgundy", price:"$115.00", href_product:"Product_ForHer/product_forher_6.html",images:"images/her-6/her-6.png"},
]
app.controller('myCtrl', function($scope) {
    $scope.products = listProductObject;
});