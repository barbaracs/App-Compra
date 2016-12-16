angular.module('starter.controllers').controller('CtrlAnunciosTodos', function($scope, $http, ServiceDetalhesAnuncios) {

// Solicita os dados dos anuncios ja publicados e cria uma promessa para ----//
// aguardar o recebimento dos dados
  var promise = ServiceDetalhesAnuncios.getAnunciosTodos();

  promise.then(function(dados) {
    $scope.anuncios = dados.data;
  });
//---------------------------------------------------------------------------//

  //Envia ao ServiceDetalhesAnuncios os dados do anuncio selecionado
  $scope.verAnuncio = function(anu) {
    ServiceDetalhesAnuncios.getDetalhes(anu);
  };

});
