(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesComponent', {
  templateUrl: 'src/MenuApp/categories/categories.html',
  bindings: {
    items: '<'
  }
});


// CategoriesComponentController.$inject = ['$rootScope'];
// function CategoriesComponentController($rootScope) {
//   var $ctrl = this;
//   var cancellers = [];
//   //
//   // $ctrl.$onInit = function () {
//   //   var cancel = $rootScope.$on('$stateChangeStart',
//   //   function(event, toState, toParams, fromState, fromParams, options){
//   //     $ctrl.showSpinner = true;
//   //   });
//   //   cancellers.push(cancel);
//   //
//   //   cancel = $rootScope.$on('$stateChangeSuccess',
//   //   function(event, toState, toParams, fromState, fromParams){
//   //     $ctrl.showSpinner = false;
//   //   });
//   //   cancellers.push(cancel);
//   //
//   //   cancel = $rootScope.$on('$stateChangeError',
//   //   function(event, toState, toParams, fromState, fromParams, error){
//   //     $ctrl.showSpinner = false;
//   //   });
//   //   cancellers.push(cancel);
//   // };
//   //
//   // $ctrl.$onDestroy = function () {
//   //   cancellers.forEach(function (item) {
//   //     item();
//   //   });
//   // };
//
// }

})();
