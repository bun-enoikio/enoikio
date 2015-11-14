var app = angular.module('app', ['ui.router', 'templates'])
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
	console.log('Main app loaded...');
	$stateProvider
		.state('main', {
			url: '/',
			views: {
				'main-content': {}
			}
		})
		;
	$urlRouterProvider.otherwise('/');
}
])
;