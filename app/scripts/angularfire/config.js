angular.module('firebase.config', [])
  .constant('FBURL', 'https://intense-fire-977.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','github'])

  .constant('loginRedirectPath', '/login');
