angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.sincronizarDados', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sincronizarDados.html',
        controller: 'sincronizarDadosCtrl'
      }
    }
  })

  .state('menu.ocorrNcias', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocorrNcias.html',
        controller: 'ocorrNciasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('cadastro', {
    url: '/page5',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.minhaConta', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhaConta.html',
        controller: 'minhaContaCtrl'
      }
    }
  })

  .state('login', {
    url: '/page10',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page10')


});