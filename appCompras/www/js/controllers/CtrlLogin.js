angular.module('starter.controllers').controller('CtrlLogin', function($scope, $ionicModal, $timeout, $http, ngFB) {


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
  $scope.openLogin = function() {
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
  $scope.login ={};

  $scope.doLogin = function() {
      var datLogin = $.param({
        dadosLogin:{
          usu: $scope.login.usu,
          senha: $scope.login.senha,
        }
      });

      console.log(datLogin);

      $http({
        method: 'POST',
        url: 'http://localhost:3000/login/test',
        data: datLogin,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function successCallback(datLogin, status) {
        console.log(datLogin.data);
        if(datLogin.data){
          $scope.logado=true;
          console.log("Login feito com sucesso")
          $timeout(function() {
            $scope.closeLogin();
          }, 1000);
        }
        else{
          console.log("Usuario não cadastrado")
          $scope.loginfail = true;
        }

      });

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




  //Logout
  $scope.doLogout = function() {
    $scope.logado=false;

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };



})
