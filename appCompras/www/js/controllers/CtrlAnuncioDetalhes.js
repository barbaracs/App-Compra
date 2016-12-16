angular.module('starter.controllers').controller('CtrlAnuncioDetalhes', function($scope, ServiceDetalhesAnuncios) {

  //Recebe os dados do anuncio a ser exibido salvos no ServiceDetalhesAnuncios
  $scope.anuncio = ServiceDetalhesAnuncios.showDetalhes();

});
