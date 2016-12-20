angular.module('starter.controllers').controller('CtrlCadastroUsuario', function($scope, $state, $ionicPopup, $http) {

$scope.cadastro ={};

  //CADASTRO DE USUARIO
  $scope.cadastroUsuario = function(cadastro) {
    var datUsu = $.param({
      dadosUsu:{
        nome: $scope.cadastro.nome,
        nomeUsuario: $scope.cadastro.nomeUsuario,
        senha: $scope.cadastro.senha,
        cel: $scope.cadastro.cel
      }
    });

    $http({
      method: 'POST',
      url: 'http://localhost:3000/cadastro/usuario',
      data: datUsu,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function successCallback(datUsu, status) {
      console.log(datUsu);
      // this callback will be called asynchronously
      // when the response is available
    });
  }
});
