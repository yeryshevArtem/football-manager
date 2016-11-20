(function () {
  'use strict';
  angular.module('leagueStructure')
  .controller('StructureController', StructureController);

  function StructureController() {
    var structure = this;
    structure.fields = {
      rules: {
        label: 'Choose between',
        options: ['Classic', 'Cut system'],
        ruleValue: null
      },
      teams: {
        label: 'Please, type name of team',
        teamValue: null
      },
      pitches: {
        label: 'Please, type the pitches',
        minNumberOfPitches: 2,
        maxNumberOfPitches: 10,
        step: 2,
        pitchValue: null
      },
      timeLength: {
        lengthInHours: {
          label: 'Please, select length of game in hours',
          timeLength: [1, 2, 3, 4, 5],
          timeLengthHoursValue: null
        },
        lengthInMinutes: {
          label: 'Please, select length of game in minutes',
          timeLength: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
          timeLengthMinutesValue: null
        },
        timeLengthValue: null
      },
      startTime: {
        label: 'From'
      },
      endTime: {
        label: 'to'
      },
      age: {
        label: 'Please, select the age',
        ageValues: {
          min: 7,
          max: 200,
          step: 1
        }
      },
      gender: {
        label: 'Please, select the gender',
        genderValue: ['male', 'female']
      },
      leagueName: {
        label: 'Please, type the League Name (For example: "Spring League Seniors")'
      }
    };
  }
})();
