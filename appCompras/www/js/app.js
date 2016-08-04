// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html'
        }
      }
    })

  .state('app.cadastrar', {
    url: '/cadastrar',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastrar.html'
      }
    }
  })

  .state('app.anuncios', {
      url: '/anuncios',
      views: {
        'menuContent': {
          templateUrl: 'templates/anuncios.html'
        }
      }
    })

    .state('app.meusAnuncios', {
        url: '/meusAnuncios',
        views: {
          'menuContent': {
            templateUrl: 'templates/meusAnuncios.html'
          }
        }
      })
    .state('app.inserirAnuncio', {
        url: '/inserirAnuncio',
        views: {
          'menuContent': {
            templateUrl: 'templates/inserirAnuncio.html'
          }
        }
      })

  .state('app.sobre', {
        url: '/sobre',
        views: {
          'menuContent': {
            templateUrl: 'templates/sobre.html'
          }
        }
      })

  .state('app.anuncios.hoje', {
        url: '/hoje',
        views: {
          'hoje': {
            templateUrl: 'templates/hoje.html'
          }
        }
      })

  .state('app.anuncios.todos', {
        url: '/todos',
        views: {
          'todos': {
            templateUrl: 'templates/todos.html'
          }
        }
      })

  .state('app.anuncios.tags', {
        url: '/tags',
        views: {
          'tags': {
            templateUrl: 'templates/tags.html'
          }
        }
      })

  //Tela de Anuncios exibe a tag Hoje sempre que e aberta
  $urlRouterProvider.otherwise('/app/anuncios/hoje');
});
