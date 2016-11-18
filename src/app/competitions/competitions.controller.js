(function () {
  'use strict';
  angular.module('competitions')
  .controller('CompetitionsController', CompetitionsController);

  function CompetitionsController() {
    var competitions = this;
    competitions.msg = ' from Competitions';
  }
})();
