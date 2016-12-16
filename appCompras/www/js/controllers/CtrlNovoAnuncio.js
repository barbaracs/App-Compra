angular.module('starter.controllers').controller('CtrlNovoAnuncio', function($scope, $state, $ionicPopup, $http, $location) {

  $scope.nanuncio ={};
  //Cria e deleta novos inputs de tags
  $scope.inputs = [{
    value: null
  }];
  $scope.addfield = function() {
    $scope.inputs.push({
      value: null
    });
  }
  $scope.removefield = function(index) {
    $scope.inputs.splice(index, 1);
  }
  //CADASTRO DE USUARIO
  $scope.novoAnuncio = function() {

    var tag = [];
    for (var i = 0; i < $scope.inputs.length; i++) {
      var valor = angular.element('#tag-' + i)[0].value;
      if (valor != "")
        tag.push(valor);
    };

    var datNAnuncio = $.param({
      dadosNAnuncio:{
        titulo: $scope.nanuncio.titulo,
        local: $scope.nanuncio.local,
        preco: $scope.nanuncio.preco,
        horainicio: $scope.nanuncio.horainicio,
        horatermino: $scope.nanuncio.horatermino,
        descricao: $scope.nanuncio.descricao,
        tag: tag
      }
    });

    $http({
      method: 'POST',
      url: 'http://localhost:3000/cadastro/anuncio',
      data: datNAnuncio,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function successCallback(datNAnuncio, status) {
      window.location.reload();
      $location.path('#/app/meusAnuncios');
    });
  };

});
