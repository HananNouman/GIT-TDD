var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
var getCats = function() {
	$http({
  method: 'GET',
  url: '/cats'
}).then(function successCallback(response) {
	$scope.cats=response.data;
    
  }, function errorCallback(response) {
    console.log(response);
  });
	

};
getCats();

$scope.addCats=function(){
	$http({
  method: 'POST',
  url: '/cats',
  headers: {
   'Content-Type': "application/JSON"
 },
 data: {catName:$scope.catName,
  ownerEmail:$scope.ownerEmail,
  imageUrl:$scope.imageUrl,
  adoptionMessage:$scope.adoptionMessage}
}).then(function successCallback(response) {
	console.log(response);
    
  }, function errorCallback(response) {
    console.log(response);
  });
	

};
// TODO: Your code here



});
