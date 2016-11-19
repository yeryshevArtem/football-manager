(function () {
  'use strict';
  angular.module('refereesAndDelegates')
  .controller('RefereesAndDelegatesController', RefereesAndDelegatesController);

  function RefereesAndDelegatesController() {
    var refereesAndDelegates = this;
    refereesAndDelegates.msg = ' from Referees and Delegates';
  }
})();
