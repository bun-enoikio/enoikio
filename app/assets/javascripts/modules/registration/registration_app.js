app && app.requires.push('app.registration');
angular.module('app.registration', [])
.config(['$stateProvider', function($stateProvider) {
	console.log('Registration provider started....');
	$stateProvider
		.state('main.registration', {
			url: 'sign-in',
			views: {
				'main-content@': {
					templateUrl: 'components/registration/templates/sign_in_tmpl.html',
					controller: function() {
						console.log("Controller is loaded.");
					}
				}
			}
		})
}])