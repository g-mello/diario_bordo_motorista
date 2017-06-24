angular.module('app.controllers', [])
  
.controller('sincronizarDadosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ocorrNciasCtrl', ['$scope', '$stateParams', '$ionicModal','moment', '$interval', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal, moment, $interval, $timeout ) {

moment.updateLocale('pt-br');

days = ['Domingo', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábabo', 'Domingo'];

$scope.ano = moment().year();
$scope.mes = moment().month();
$scope.dia = moment().date();
$scope.dia_semana = days[moment().weekday()-1];
$scope.hora = 3 + moment().hours();
$scope.minutos = moment().minutes();
$scope.segundos = moment().seconds();

// Relogio Jornada
var tick_relogio = function(){
  $scope.relogio = moment().format("HH : mm : ss"); 
}

$interval(tick_relogio, 1000);


// Relogio Refeição
$scope.ref_inicio = moment().format("ddd, D/MMM/YYYY");




// Local Storage ==============================

$scope.getOcorrenciasLocal = function() {
     // retorna conteúdo da chave produtos
     return localStorage.ocorrencias;
} 


$scope.insereOcorrenciaLocal = function(desc) { 

      var horario =  moment().format("h:mm:ss a");
      var data = moment().format("ddd, D/MMM/YYYY"); 
      var descricao = desc; 
      var localizacao ="Hello WOrld";

      var nova_ocorrencia = { data, horario, descricao, localizacao };

      // guarda os produtos
      var ocorrencias = [ ];

      // verifica se a chave existe
      if (typeof localStorage.ocorrencias != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          ocorrencias = JSON.parse(localStorage.ocorrencias);
      }
      // adiciona produto novo no vetor
     ocorrencias.push(nova_ocorrencia);
     // converte JSON para String
      var paraString = JSON.stringify(ocorrencias);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('ocorrencias', paraString);
      
      alert("Inserção Local com sucesso");

      return novo;
}


//================================================

// MODALS =========================================
// Modal Jornada
$ionicModal.fromTemplateUrl('jornada.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_jornada) {
              $scope.modal_jornada = modal_jornada;
                });

  $scope.openModalJornada = function() {
          $scope.modal_jornada.show();
            };


  $scope.closeModalJornada = function() {
       $scope.modal_jornada.hide();
       $scope.insereOcorrenciaLocal('Fim da Jornada');
  };


//===================================


// Modal Direção Diária 
$ionicModal.fromTemplateUrl('direcao_diaria.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_dd) {
              $scope.modal_dd = modal_dd;
                });

  $scope.openModalDD= function() {
          $scope.modal_dd.show();
            };


  $scope.closeModalDD= function() {
       $scope.modal_dd.hide();
       $scope.insereOcorrenciaLocal('Fim da Direção Diária');
  };


//===================================


// Modal Refeição 
$ionicModal.fromTemplateUrl('refeicao.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_refeicao ) {
              $scope.modal_refeicao = modal_refeicao;
                });

  $scope.openModalRefeicao = function() {
          $scope.modal_refeicao.show();
            };


  $scope.closeModalRefeicao = function() {
       $scope.modal_refeicao.hide();
       $scope.insereOcorrenciaLocal('Fim da Direção Diária');
  };


//===================================


// Modal Carga & Descarga 
$ionicModal.fromTemplateUrl('carga_descarga.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_cd) {
              $scope.modal_cd = modal_cd ;
                });

  $scope.openModalCD = function() {
          $scope.modal_cd.show();
            };

  $scope.closeModalCD = function() {
       $scope.modal_cd.hide();
       $scope.insereOcorrenciaLocal('Fim da Carga e Descarga');
   };

//===============================

// Modal Carga & Descarga 
$ionicModal.fromTemplateUrl('manutencao.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_manutencao) {
              $scope.modal_manutencao = modal_manutencao;
                });

  $scope.openModalManutencao = function() {
       $scope.modal_manutencao.show();
   };


  $scope.closeModalManutencao = function() {
       $scope.modal_manutencao.hide();
       $scope.insereOcorrenciaLocal('Fim da Manutenção');
  };

//===============================


// Modal Pernoite 
$ionicModal.fromTemplateUrl('pernoite.html', {
        scope: $scope,
    animation: 'slide-in-up'
      }).then(function(modal_pernoite) {
              $scope.modal_pernoite = modal_pernoite;
                });

  $scope.openModalPernoite = function() {
          $scope.modal_pernoite.show();
            };


  $scope.closeModalPernoite= function() {
       $scope.modal_pernoite.hide();
       $scope.insereOcorrenciaLocal('Fim do Pernoite');
  };

//===============================



      // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
       $scope.modal.remove();
     });

     // Execute action on hide modal
     $scope.$on('modal.hidden', function() {
            // Execute action
     });

     // Execute action on remove modal
     $scope.$on('modal.removed', function() {
        // Execute action
     });
//===============================================




}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cadastroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('minhaContaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
