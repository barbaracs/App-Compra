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

  //Titulo somente letras
  $scope.onlyLetters = function() {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser

    if ( (key == 32)  ||
        ((key >  64)  && (key < 91))  ||
        ((key >  96)  && (key < 123)) ||
         (key == 199) ||
         (key == 231))
    {} else {
        //caso o character ascii nao for uma letra ou espaço bloqueia a açao
        if (e.preventDefault) e.preventDefault(); //normal browsers
            e.returnValue = false; //IE
    }
  };

  //CADASTRO DE ANUNCIO
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

    })
    .then(function successCallback(datNAnuncio, statusN) {
      console.log(datNAnuncio);

      for (var i = 0; i < tag.length; i++) {
        var info = $.param({
          tag: tag[i]
        });

        $http({
          method: 'POST',
          url: 'http://localhost:3000/cadastro/tags',
          data: info,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function successCallback(dadosTags, statusT) { console.log(dadosTags); });
      }

    }).then(function successCallback(datNAnuncio, status) {
      window.location.reload();
      $location.path('#/app/meusAnuncios');

    });
  };

});
