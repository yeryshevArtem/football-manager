(function () {
  'use strict';
  angular.module('payments')
  .controller('PaymentsController', PaymentsController);

  function PaymentsController() {
    var payments = this;
    payments.msg = ' from Payments';
  }
})();
