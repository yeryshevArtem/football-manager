(function () {
  'use strict';
  angular.module('venues')
  .controller('VenuesController', VenuesController);

  function VenuesController() {
    var venues = this;
    venues.msg = ' from Venues';
  }
})();
