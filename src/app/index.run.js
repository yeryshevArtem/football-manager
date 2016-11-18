(function () {
  'use strict';

  angular.module('footballManager')
  .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
