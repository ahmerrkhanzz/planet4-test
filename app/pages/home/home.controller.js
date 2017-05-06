(function () {
  'use strict';

  angular
    .module('test')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController() {
    var vm = this;
    vm.arctic = [1, 3, 4, 5, 2, 5];
    vm.ocean = [1, 2, 1, 3, 1, 4];
    vm.detox = [3, 4, 5, 3, 2, 1];
    vm.energy = [2, 3, 5, 2, 1, 1];
    vm.forests = [2, 4, 6, 3, 1, 5];
    vm.res = [
      {
        category: 'animal',
        title: 'Pick an animal',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/15190135/icon_info-color.png',
        thumbs: [
          { idx: 1, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr08/enhanced-buzz-18695-1413467110-38.jpg', selected: false },
          { idx: 2, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr09/enhanced-buzz-768-1413466971-1.jpg', selected: false },
          { idx: 3, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr11/enhanced-buzz-1858-1413467065-16.jpg', selected: false },
          { idx: 4, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/16/9/enhanced/webdr08/enhanced-buzz-18673-1413467253-26.jpg', selected: false }
        ],
      },
      {
        category: 'color',
        title: 'Pick a color',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173840/anything-color1.png',
        thumbs: [
          { idx: 1, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/24/11/enhanced/webdr07/enhanced-buzz-19570-1414164444-21.jpg', selected: false },
          { idx: 2, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/24/11/enhanced/webdr04/enhanced-buzz-504-1414164707-16.jpg', selected: false },
          { idx: 3, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/24/11/enhanced/webdr05/enhanced-buzz-8888-1414165086-13.jpg', selected: false },
          { idx: 4, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/24/11/enhanced/webdr09/enhanced-buzz-6884-1414165128-0.jpg', selected: false }
        ],
      },
      {
        category: 'weekend',
        title: 'What is your ideal weekend activity?',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173245/insight-color.png',
        thumbs: [
          { idx: 1, name: 'Ice Skating', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr11/enhanced-buzz-23368-1413555753-4.jpg' },
          { idx: 2, name: 'Scuba Diving', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr09/enhanced-buzz-23097-1413555791-1.jpg' },
          { idx: 3, name: 'A long walk in woods', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr04/enhanced-buzz-18423-1413555837-9.jpg' },
          { idx: 4, name: 'Shopping', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr11/enhanced-buzz-23390-1413556018-11.jpg' },
        ]
      },
      {
        category: 'money',
        title: 'If you won a lot of money, what would you spend it on? ',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173439/registration-color.png',
        thumbs: [
          { idx: 1, name: 'ALL of clothes', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr05/enhanced-buzz-23991-1413557793-6.jpg', selected: false },
          { idx: 2, name: 'A trip to north pole', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr09/enhanced-buzz-23589-1413557847-18.jpg', selected: false },
          { idx: 3, name: 'Food, lots of food', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr08/enhanced-buzz-3405-1413558006-1.jpg', selected: false },
          { idx: 4, name: 'Thousands of plants', img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr08/enhanced-buzz-3341-1413558072-16.jpg', selected: false },
        ],
      },
      {
        category: 'place',
        title: 'If you could live anywhere, where would it be?',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173650/payment-color.png',
        thumbs: [
          { idx: 1, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr10/enhanced-buzz-27251-1413556510-0.jpg', selected: false },
          { idx: 2, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr11/enhanced-buzz-26204-1413556551-1.jpg', selected: false },
          { idx: 3, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr04/enhanced-buzz-13806-1413556650-8.jpg', selected: false },
          { idx: 4, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/10/enhanced/webdr08/enhanced-buzz-4600-1413556706-0.jpg', selected: false }
        ]
      },
      {
        category: 'singer',
        title: 'Pick a Beyonce',
        icon: 'https://d2xy5qvxyo4wme.cloudfront.net/web/uploads/2016/01/19173742/assess-color.png',
        thumbs: [
          { idx: 1, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr10/enhanced-buzz-21303-1413558707-15.jpg', selected: false },
          { idx: 2, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr01/enhanced-buzz-2183-1413558760-23.jpg', selected: false },
          { idx: 3, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr07/enhanced-buzz-31169-1413558859-3.jpg', selected: false },
          { idx: 4, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/17/11/enhanced/webdr04/enhanced-buzz-7816-1413559094-6.jpg', selected: false }
        ]
      }

    ];


    function submit(a) {
      var y = a.reduce(function (all, item, index) {
        item.thumbs.forEach(function (demo) {
          if (demo.selected) {
            all.push(demo.idx);
          }
        });
        return all;
      }, []);
      switch (y) {
        case JSON.stringify(y) === JSON.stringify(vm.arctic):
          vm.text = "Arctic";
          break;
        case JSON.stringify(y) === JSON.stringify(vm.forests):
          vm.text = "Forests";
          break;
        case JSON.stringify(y) === JSON.stringify(vm.energy):
          vm.text = "Energy";
          break;
        case JSON.stringify(y) === JSON.stringify(vm.detox):
          vm.text = "Detox";
        default:
          vm.text = "Ocean"
      }
    }

    function updateSelection(position, entities) {
      angular.forEach(entities, function (subscription, index) {
        if (position != index)
          subscription.selected = false;
      });
    }

    vm.submit = submit;
    vm.updateSelection = updateSelection;

  }

})();
