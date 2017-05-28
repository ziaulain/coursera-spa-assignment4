(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var vm = this;
  vm.categoryName = items.data.category.name;
  vm.items = items.data.menu_items;
  //var item = items[$stateParams.categoryName];

}

})();
