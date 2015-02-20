var app = angular.module('starter.controllers', []);

app.controller('StatusCtrl', function($scope) {
	
});

app.controller('SwitchCtrl', function($scope, SwitchService) {
	
	$scope.devices = {};

	$scope.devices = SwitchService.query({'access_token':'123456789'})
	
	$scope.change = function (devstat) {
		
		console.log(devstat.status);
		if (devstat.status) {
			SwitchService.update({'access_token':'123456789'}, {'id': devstat.id, 'cmd': '-n'  ,'status': true});
		} else 
		{
			SwitchService.update({'access_token':'123456789'}, {'id': devstat.id, 'cmd': '-f'  ,'status': false});
		};
		
	};

});



