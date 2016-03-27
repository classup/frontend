var app=angular.module("root", []);
	app.controller("index", function($scope) {

		$scope.tabselected = 1;
    
    $scope.selectTab = function(key)
    {
        $scope.tabselected = key;
    };
    $scope.isSelected = function(key)
    {
        return $scope.tabselected === key;
    };


		$scope.Mumbai = {};
		$scope.Mumbai = [
			{
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    location : "Mumbai",
		    email: "xyz@gmail.com" 
		    },
		 
		  
		    {
		    name : "Vidhyalankar Classes",
		    contact : "789654123",
		    image : "images/sinhals.jpg",
		    location : "Mumbai",
		    email: "xyz@gmail.com"
		    },
		    		    {
		    name : "Vidhyalankar Classes",
		    contact : "789654123" ,
		    image : "images/sinhals.jpg",
		    location : "Mumbai",
		    email: "xyz@gmail.com" 
		    }
		    ];
		    $scope.Delhi={};
		    $scope.Delhi=[
		       {
		    name : "Vidhyalankar Classes",
		    contact : "789654123",
		    image : "images/sinhals.jpg",
		    location : "Delhi",
		    email: "xyz@gmail.com" 
		    },
		      {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    location : "Delhi",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Banglore={};
			$scope.Banglore=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    location : "Banglore",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    location : "Banglore",
		    email: "xyz@gmail.com"
		    }


			];
});