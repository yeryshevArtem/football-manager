(function () {
  'use strict';
  angular.module('teamMembers')
  .controller('TeamMembersController', TeamMembersController);

  function TeamMembersController() {
    var teamMembers = this;
    teamMembers.msg = ' from Team Members';
  }
})();
