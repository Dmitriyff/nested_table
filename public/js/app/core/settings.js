(function(ng, window) {

	var App = ng.module('App', ['ui.router']);

	App.config(function($stateProvider) { 

		$stateProvider
		.state('base', {
			'url': '',
			'templateUrl': ''
		})
	});

	window.App = App;

})(angular, window);