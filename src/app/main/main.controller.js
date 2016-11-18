(function () {
  'use strict';

  angular.module('footballManager')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var main = this;
    main.logo = 'Company name';
  }
})();
