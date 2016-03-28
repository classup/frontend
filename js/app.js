var app=angular.module("root", []);
	app.controller("index", function($scope) {

		$scope.tabselected=1;
		$scope.tabselected2 = 4;
    
    $scope.selectTab = function(key)
    {
        $scope.tabselected = key;
    };
    $scope.selectTabb = function(key)
    {
        $scope.tabselected2 = key;
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
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    location : "Mumbai",
		    email: "xyz@gmail.com" 
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
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
			$scope.Science={};
			$scope.Science=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Science",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Science",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Commerce={};
			$scope.Commerce=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Commerce",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Commerce",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Arts={};
			$scope.Arts=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Arts",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    stream : "Arts",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Maths={};
			$scope.Maths=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Maths",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Maths",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Mechanics={};
			$scope.Mechanics=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Mechanics",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Mechanics",
		    email: "xyz@gmail.com"
		    }
			];
			$scope.Bee={};
			$scope.Bee=[
			  {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Bee",
		    email: "xyz@gmail.com"
		    },
		    {
		    name : "Sinhal Classes",
		    contact : "789654133",
		    image : "images/sinhals.jpg",
		    subject : "Bee",
		    email: "xyz@gmail.com"
		    }
			];

});