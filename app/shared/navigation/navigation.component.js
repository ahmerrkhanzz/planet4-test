(function() {

  'use strict';

  angular
    .module('test')
    .component('navigation', {
      bindings: {
        data: '='
      },
      controller: NavigationController,
      controllerAs: 'vm',
      templateUrl: 'app/shared/navigation/navigation.html'
    });

  /* @ngInject */

  function NavigationController() {
    var vm = this;
    
    vm.menus = [
      {
        name: 'Animal',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/15190135/icon_info-color.png'
      },
      {
        name: 'Color',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173840/anything-color1.png',
      },
      {
        name: 'Weekend',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173245/insight-color.png',
      },
      {
        name: 'Money',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173439/registration-color.png',
      },
      {
        name: 'Place',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173650/payment-color.png',
      },
      {
        name: 'Singer',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173742/assess-color.png',
      },

    ]
  }
})();
