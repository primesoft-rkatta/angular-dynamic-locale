
/*
@chalk

@name Dynamic Locale
@description
 */

(function() {
  var dl;

  dl = angular.module("dynamic.locale", ["ng"]);


  /*
  @chalk
  
  @name Dynamic Currency
  @description
   */

  dl.filter("dlCurrency", [
    "$filter", "dlProvider", function($filter, dlProvider) {
      dlProvider.loadCurrencyFilters();
      return function(amount, locale, currencySymbol) {
        var error, value;
        if (locale == null) {
          locale = "en-us";
        }
        try {
          value = dlProvider.currencyFilters[locale](amount, currencySymbol);
        } catch (_error) {
          error = _error;
          value = $filter("currency")(amount, currencySymbol);
        }
        return value;
      };
    }
  ]);


  /*
  @chalk
  
  @name Dynamic Date
  @description
   */

  dl.filter("dlDate", [
    "$filter", "dlProvider", function($filter, dlProvider) {
      dlProvider.loadDateFilters();
      return function(date, locale, format) {
        var error, value;
        if (locale == null) {
          locale = "en-us";
        }
        try {
          value = dlProvider.dateFilters[locale](date, format);
        } catch (_error) {
          error = _error;
          value = $filter("date")(date, format);
        }
        return value;
      };
    }
  ]);


  /*
  @chalk
  
  @name Dynamic Locale Provider
  @description
  
  @todo Add configurability since it is a provider
   */

  dl.provider("dlProvider", function() {
    var currencyMap, getFileName, getModuleName, locales, ngLocaleMap;
    ngLocaleMap = {};
    locales = ['en-us'];
    currencyMap = {
      "USD": "en-us"
    };
    getFileName = function(locale) {
      return "/i18n/angular-locale_" + locale + ".js";
    };
    getModuleName = function(locale) {
      return "dynamic.locale." + locale;
    };
    this.setLocales = function(locales) {
      return locales = locales;
    };
    this.setCurrencyMap = function(map) {
      return currencyMap = map;
    };
    this.$get = [
      "$http", "$q", function($http, $q) {
        return {
          currencyFilters: {},
          dateFilters: {},
          loadLocales: function(callback) {
            var promises;
            promises = [];
            angular.forEach(locales, (function(_this) {
              return function(locale, key) {
                return promises.push(_this.loadLocale(locale));
              };
            })(this));
            return $q.all(promises).then((function(_this) {
              return function(values) {
                angular.forEach(ngLocaleMap, function(ngLocale, locale) {
                  eval(ngLocale);
                  return _this.addLocale(locale, angular.module("ngLocale"));
                });
                return callback.apply();
              };
            })(this));
          },
          loadLocale: function(locale) {
            var file;
            file = getFileName(locale);
            return $http.get(file).success(function(data, status) {
              return ngLocaleMap[locale] = data;
            }).error(function(data, status) {
              throw Error("" + status + ": Failed to load " + file + ".");
            });
          },
          addLocale: function(locale, ngLocaleModule) {
            var module;
            module = angular.module(getModuleName(locale), []);
            return module._invokeQueue.push(ngLocaleModule._invokeQueue[0]);
          },
          loadCurrencyFilters: function() {
            return angular.forEach(locales, (function(_this) {
              return function(locale, key) {
                return _this.currencyFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("currency");
              };
            })(this));
          },
          loadDateFilters: function() {
            return angular.forEach(locales, (function(_this) {
              return function(locale, key) {
                return _this.dateFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("date");
              };
            })(this));
          }
        };
      }
    ];
    return this;
  });

}).call(this);
