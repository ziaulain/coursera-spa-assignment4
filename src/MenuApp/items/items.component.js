(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/MenuApp/items/items.template.html',
  bindings: {
    items: '<'
  }
});


})();
