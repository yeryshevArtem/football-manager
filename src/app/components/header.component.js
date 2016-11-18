(function () {
  'use strict';

  angular.module('footballManager')
    .component('headerComponent', {
      templateUrl: 'app/components/header.template.html',
      controller: HeaderController,
      controllerAs: 'header',
      bindings: {
        logo: '<'
      }
    });
    function HeaderController() {
      var header = this;
      header.menuItems = ['Structure', 'Season', 'Competitions', 'Teams', 'Team Members', 'Payments', 'Venues', 'Referees and Delegates'];
    }
})();
