angular.module('app.controllers', [])
  
.controller('sincronizarDadosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ocorrNciasCtrl', ['$scope', '$stateParams', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal) {

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
 
