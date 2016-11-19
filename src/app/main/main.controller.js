(function () {
  'use strict';

  angular.module('footballManager')
  .controller('MainController', MainController);

  function MainController() {
    var main = this;
    main.logo = 'Company name';
  }
})();
