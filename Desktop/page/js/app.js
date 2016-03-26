var app=angular.module("root", []);
	app.controller("index",["$scope", function($scope) {

		$scope.products = {};
		$scope.products = [
			{
		    name : "Sinhal Classes",
		    contact : "789654133",
		    img : "images/sinhals.jpg"
		    },
		    {
		    name : "Vidhyalankar Classes",
		    contact : "789654123"  ,
		    img : "images/sinhals.jpg"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    img : "images/sinhals.jpg"
		    },
		    {
		    name : "Vidhyalankar Classes",
		    contact : "789654123" ,
		    img : "images/sinhals.jpg"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    img : "images/sinhals.jpg"
		    },
		    {
		    name : "Vidhyalankar Classes",
		    contact : "789654123" ,
		    img : "images/sinhals.jpg"
		    }
		    ];
}]);