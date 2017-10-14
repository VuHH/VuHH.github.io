var app = angular.module('myApp', []);
var listProductObject = [
	{id:"1", name:"Textured Nylon Periwinkle Big Bag", price:"$65.00",href_product:"Product_ForType/product_fortype_1.html",images:"images/type-1/type-1.jpg"},
	{id:"2", name:"Textured Nylon Deep Forest M", price:"$55.00",href_product:"Product_ForType/product_fortype_2.html",images:"images/type-2/type-2.jpg"},
	{id:"3", name:"Textured Nylon Black S", price:"$65.00",href_product:"Product_ForType/product_fortype_3.html",images:"images/type-3/type-3.jpg"},
	{id:"4", name:"Textured Nylon Tuscan Red S", price:"$45.00",href_product:"Product_ForType/product_fortype_4.html",images:"images/type-4/type-4.jpg"},
	{id:"5", name:"Textured Nylon Periwinkle S", price:"$45.00",href_product:"Product_ForType/product_fortype_5.html",images:"images/type-5/type-5.jpg"},
	{id:"6", name:"Textured Nylon Periwinkle Baglett", price:"$45.00",href_product:"Product_ForType/product_fortype_6.html",images:"images/type-6/type-6.jpg"},
]
app.controller('myCtrl', function($scope) {
    $scope.products = listProductObject;
});