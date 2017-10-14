var app = angular.module('myApp', []);
var listProductObject = [
	{id:"1", name:"Rio Yellow HBB S", listprice:"$39.00", discounted:"NOW $15.00",href_product:"Product_ForSale/product_forsale_1.html",images:"images/sale-1/sale-1.png"},
	{id:"2", name:"Ocean Glacier Blue HBB S", listprice:"$59.00", discounted:"NOW $33.00",href_product:"Product_ForSale/product_forsale_2.html",images:"images/sale-2/sale-2.jpg"},
	{id:"3", name:"Textured Nylon Purple Big Bag", listprice:"$65.00", discounted:"NOW $39.00",href_product:"Product_ForSale/product_forsale_3.html",images:"images/sale-3/sale-3.png"},
	{id:"4", name:"Great Outdoors Tech Citron M", listprice:"$65.00", discounted:"NOW $36.00",href_product:"Product_ForSale/product_forsale_4.html",images:"images/sale-4/sale-4.png"},
	{id:"5", name:"Poly Large Baglett Silver Pink", listprice:"$20.00", discounted:"NOW $15.00",href_product:"Product_ForSale/product_forsale_5.html",images:"images/sale-5/sale-5.png"},
	{id:"6", name:"Neo Dimensional Red S", listprice:"$55.00", discounted:"NOW $27.50",href_product:"Product_ForSale/product_forsale_6.html",images:"images/sale-6/sale-6.png"},
]
app.controller('myCtrl', function($scope) {
    $scope.products = listProductObject;
});