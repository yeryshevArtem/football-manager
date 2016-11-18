(function () {
  'use strict';
  angular.module('teams')
  .controller('TeamsController', TeamsController);

  function TeamsController() {
    var teams = this;
    teams.msg = ' from Teams';
  }
})();
