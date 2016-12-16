angular.module('starter.controllers').controller('CtrlAnunciosHoje', function($scope, ServiceDetalhesAnuncios) {

// Solicita os dados dos anuncios do dia e cria uma promessa para -----------//
// aguardar o recebimento dos dados
  var promise = ServiceDetalhesAnuncios.getAnunciosDia();

  promise.then(function(dados) {
    $scope.anuncios = dados.data;
  });
//---------------------------------------------------------------------------//

  //Envia ao ServiceDetalhesAnuncios os dados do anuncio selecionado
  $scope.verAnuncio = function(anu) {
    ServiceDetalhesAnuncios.getDetalhes(anu);
  };

});
