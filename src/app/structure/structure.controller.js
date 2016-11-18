(function () {
  'use strict';
  angular.module('leagueStructure')
  .controller('StructureController', StructureController);

  function StructureController() {
    var structure = this;
    structure.msg = ' from Structure';
  }
})();
