var app = angular.module('myApp', []);
var listProductObject = [
	{id:"1", name:"Great Outdoors Olive M", price:"$65.00", href_product:"Product_ForHim/product_forhim_1.html",images:"images/him-1/him-1.png"},
	{id:"2", name:"Ground Cover Navy Tan M", price:"$65.00", href_product:"Product_ForHim/product_forhim_2.html",images:"images/him-2/him-2.png"},
	{id:"3", name:"Microfibre Black M", price:"$65.00", href_product:"Product_ForHim/product_forhim_3.html",images:"images/him-3/him-3.png"},
	{id:"4", name:"Textured Nylon Periwinkle Big Bag", price:"$65.00", href_product:"Product_ForHim/product_forhim_4.html",images:"images/him-4/him-4.png"},
	{id:"5", name:"Urban Traveller Dark Teal M", price:"$65.00", href_product:"Product_ForHim/product_forhim_5.html",images:"images/him-5/him-5.png"},
	{id:"6", name:"Urban Traveller Tuscan Red M", price:"$65.00", href_product:"Product_ForHim/product_forhim_6.html",images:"images/him-6/him-6.png"},
]
app.controller('myCtrl', function($scope) {
    $scope.products = listProductObject;
});