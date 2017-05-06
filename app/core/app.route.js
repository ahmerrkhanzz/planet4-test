(function () {
  'use strict';

  angular
    .module('test')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
      });

    $urlRouterProvider.otherwise('/');
  }
})();