var app = angular.module('classUp', []);
app.controller("ClassController", function (){
this.tab=1;

this.selectTab = function(setTab){
    this.tab = setTab;
};

this.isSelected = function(checkTab){
    return this.tab === checkTab;
}
});
app.controller("enggclasscontroller",function($scope){
$scope.enggclass = {};
$scope.enggclass =[
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
    }
    ]

    });
