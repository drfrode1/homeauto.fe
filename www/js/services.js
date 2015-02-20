var app = angular.module('starter.services', ['ngResource']);

app.factory('SwitchService', function($resource) {
	return $resource(
		"http://192.168.1.31:8000/switches/:id",
		{id: "@id"},
		{
			update: {method: "PUT"}
		}
		
		);
});

