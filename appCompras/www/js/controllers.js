angular.module('starter.controllers', ['starter.services', 'ngOpenFB'])


.controller('ProfileCtrl', function ($scope, ngFB) {
    ngFB.api({
        path: '/me',
        params: {fields: 'id,name'}
    }).then(
        function (user) {
            $scope.user = user;
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, ngFB) {
//
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   //   function MyCtrl($scope, $ionicHistory) {
//   //     $scope.myGoBack = function() {
//   //       $ionicHistory.goBack();
//   //   };
//   // }
//
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  //Deixa icon-eye azul
  $scope.highlightSenha = function(ok) {
    console.log(ok);
    if(ok==true)
      $('#zoinho').css({color: 'turquoise'});
    else
      $('#zoinho').css({color: 'grey'});
  };

  //Login
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // for(var i=0; i<usuarios.lenght; i++)
    //   if($scope.login.usu==usuarios[i]){
    //     console.log($scope.login.usu);
        $scope.logado=true;
    //   }

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


$scope.fbLogin = function () {
    ngFB.login({scope: 'email, publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.logado=true;
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
};


//
//
//   //Logout
//   $scope.doLogout = function() {
//     $scope.logado=false;
//
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
//
//
//   //Cria e deletar novos inputs de tags
//   $scope.inputs = [{
//     value: null
//   }];
//   $scope.addfield = function() {
//     $scope.inputs.push({
//       value: null
//     });
//   }
//   $scope.removefield = function(index) {
//     $scope.inputs.splice(index, 1);
//   }
})

// .controller('PlaylistsCtrl', function($scope) {
//   //  $scope.playlists = [
//   //{ title: 'Reggae', id: 1 },
//   //{ title: 'Chill', id: 2 },
//   //{ title: 'Dubstep', id: 3 },
//   //{ title: 'Indie', id: 4 },
//   //{ title: 'Rap', id: 5 },
//   //{ title: 'Cowbell', id: 6 }
//   //];
// })

// .controller('CadastroCtrl', function($scope, $cordovaCamera, $cordovaFile) {
//   $scope.images = [];
//
//   $scope.addImage = function() {
//     console.log("add image");
//   }
//
//   $scope.urlForImage = function(imageName) {
//     console.log("get correct path for image");
//   }
//
// });
