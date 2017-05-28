(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: 'CategoriesController as vm',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: "ItemsController as vm",
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryName);
      }]
    }
  });

}

})();
