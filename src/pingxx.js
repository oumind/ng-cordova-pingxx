(function () {
  'use strict';

  angular.module('ngCordova.plugins.pingxx', [])

    .factory('cordovaPingxx', function ($rootScope, $timeout) {
      var cordovaPingxx = {};

      cordovaPingxx.createPayment = function (charge, urlScheme) {
        window.pingxx.createPayment(charge, urlScheme);
      };

      var payFinishedEvent = function (event) {
        $timeout(function () {
          $rootScope.$broadcast('pingxx:pay-finished', event);
        });
      };

      document.addEventListener("deviceready", function () {
        document.addEventListener("pingxx-pay-finished", payFinishedEvent, false);
      });

      return cordovaPingxx;
    });
}());
