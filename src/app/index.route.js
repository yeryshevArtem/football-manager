(function () {
  'use strict';

  angular.module('footballManager')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.template.html',
        controller: 'MainController as main'
      })
      .state('home.structure', {
        url: 'structure',
        templateUrl: 'app/structure/structure.template.html',
        controller: 'StructureController as structure'
      })
      .state('home.season', {
        url: 'season',
        templateUrl: 'app/season/season.template.html',
        controller: 'SeasonController as season'
      })
      .state('home.competitions', {
        url: 'competitions',
        templateUrl: 'app/competitions/competitions.template.html',
        controller: 'CompetitionsController as competitions'
      })
      .state('home.teams', {
        url: 'teams',
        templateUrl: 'app/teams/teams.template.html',
        controller: 'TeamsController as teams'
      })
      .state('home.teamMembers', {
        url: 'team-members',
        templateUrl: 'app/team-members/team-members.template.html',
        controller: 'TeamMembersController as teamMembers'
      })
      .state('home.payments', {
        url: 'payments',
        templateUrl: 'app/payments/payments.template.html',
        controller: 'PaymentsController as payments'
      })
      .state('home.venues', {
        url: 'venues',
        templateUrl: 'app/venues/venues.template.html',
        controller: 'VenuesController as venues'
      })
      .state('home.referees&Delegates', {
        url: 'referees-and-delegates',
        templateUrl: 'app/referees-and-delegates/referees-and-delegates.template.html',
        controller: 'RefereesAndDelegatesController as refereesAndDelegates'
      });
  }
})();
