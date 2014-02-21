(function() {
  var app;

  app = angular.module('app', ['dynamic.locale']);

  app.config([
    'dlProviderProvider', function(dlProviderProvider) {
      dlProviderProvider.setDefaultLocale('en-us');
      dlProviderProvider.setLocales(['de', 'en-ca', 'en-gb', 'en-us']);
      dlProviderProvider.setCurrencyMap({
        'CAD': 'en-ca',
        'EUR': 'de',
        'GBP': 'en-gb',
        'USD': 'en-us'
      });
      return dlProviderProvider.loadLocales();
    }
  ]);

  app.controller('AngularDynamicLocaleController', [
    '$scope', 'dlCurrencySymbol', 'dlProvider', function($scope, dlCurrencySymbol, dlProvider) {
      var currencyMap, x;
      currencyMap = dlProvider.getCurrencyMap();
      $scope.dlCurrencySymbol = dlCurrencySymbol;
      return $scope.values = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 1; _i <= 10000; x = ++_i) {
          _results.push({
            currency_code: Object.keys(currencyMap)[Math.floor(Math.random() * 4)],
            currency: parseFloat(Math.random() * (20 - 10) + 10).toFixed(2)
          });
        }
        return _results;
      })();
    }
  ]);

}).call(this);
