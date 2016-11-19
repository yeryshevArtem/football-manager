(function () {
  'use strict';

  angular.module('footballManager')
  .filter('deleteSpacesAndLowerFirst', deleteSpacesAndLowerFirst);

  function deleteSpacesAndLowerFirst() {
    return function (srcString) {
      return srcString.replace(/\s+/g, '').replace(/^./, srcString[0].toLowerCase());
    }
  }
})();
