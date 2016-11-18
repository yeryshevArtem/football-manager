(function () {
  'use strict';
  angular.module('season')
  .controller('SeasonController', SeasonController);

  function SeasonController() {
    var season = this;
    season.msg = ' from Season';
  }
})();
