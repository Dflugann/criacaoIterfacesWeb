angular.module('myApp').controller('myController', ['$scope', '$interval' , function ($scope, $interval) {
	$scope.nome = 'Flavio Santos';
	$scope.numero = 0;

	// $interval(function () {
	// 	$scope.numero++;
	// }, 1000);

	setInterval(function (){
		$scope.$apply(function (){
			$scope.numero++;
		})
	}, 1000);
}])