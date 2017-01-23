angular.module('starter.services', []).service('ServiceDetalhesAnuncios', function($http, $q) {

  var anuncio = [];
  var dadosHoje = [];
  var dadosTodos = [];
  var deferred1 = $q.defer();
  var deferred2 = $q.defer();

//---- Requisição dos anuncios ao servidor ----------------------------------//
      $http({
        method: 'GET',
        url: 'http://localhost:3000/anuncios/dia',
        data: dadosHoje,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function successCallback(dadosHoje) {
        deferred1.resolve(dadosHoje);
      });

      $http({
        method: 'GET',
        url: 'http://localhost:3000/anuncios/todos',
        data: dadosTodos,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function successCallback(dadosTodos) {
          deferred2.resolve(dadosTodos);
      });
//---------------------------------------------------------------------------//

      //Retorna ao CtrlAnunciosHoje a promessa dos dados dos anuncios do dia
      this.getAnunciosDia = function() {
        return deferred1.promise;
      }

      //Retorna ao CtrlAnunciosTodos a promessa dos dados de todos os anuncios
      this.getAnunciosTodos = function() {
        return deferred2.promise;
      }

      //Limpa os dados da posição 0 do array anuncio[] e recebe os dados do
      //anuncio selecionado enviados por CtrlAnunciosHoje ou CtrlAnunciosTodos
      this.getDetalhes = function(anu) {
        anuncio.splice(0, 1);
        anuncio.push(anu);
      }

      //Envia ao CtrlAnuncioDetalhes os dados do anuncio a ser exibido
      this.showDetalhes = function() {
        return anuncio;
      }

});
