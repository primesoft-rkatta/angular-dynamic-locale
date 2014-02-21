/**
 * Angular-Dynamic-Locale v0.0.1
 *
 * @author: Carey Hinoki <carey.hinoki@gmail.com> (http://careyhinoki.me/)
 * @date: 2014-02-20
 */


/*
@chalk

@name Dynamic Locale
@description
 */

(function() {
  var app, dl;

  dl = angular.module('dynamic.locale', ['ng']);

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


  /*
  @chalk
  
  @name Dynamic Currency
  @description
   */

  dl.filter('dlCurrency', [
    '$filter', 'dlProvider', function($filter, dlProvider) {
      var currencyMap;
      currencyMap = dlProvider.getCurrencyMap();
      dlProvider.loadCurrencyFilters();
      return function(amount, format, currencySymbol) {
        var error, locale, value;
        locale = currencyMap[format] || format;
        try {
          value = dlProvider.currencyFilters[locale](amount, currencySymbol);
        } catch (_error) {
          error = _error;
          value = $filter('currency')(amount, currencySymbol);
        }
        return value;
      };
    }
  ]);


  /*
  @chalk
  
  @name Currency Symbol
  @description
  
  @see http://www.xe.com/symbols.php
   */

  dl.constant('dlCurrencySymbol', {
    'ALL': '\u004c\u0065\u006b',
    'AFN': '\u060b',
    'ARS': '\u0024',
    'AWG': '\u0192',
    'AUD': '\u0024',
    'AZN': '\u043c\u0430\u043d',
    'BSD': '\u0024',
    'BBD': '\u0024',
    'BYR': '\u0070\u002e',
    'BZD': '\u0042\u005a\u0024',
    'BMD': '\u0024',
    'BOB': '\u0024\u0062',
    'BAM': '\u004b\u004d',
    'BWP': '\u0050',
    'BGN': '\u043b\u0432',
    'BRL': '\u0052\u0024',
    'BND': '\u0024',
    'KHR': '\u17db',
    'CAD': '\u0024',
    'KYD': '\u0024',
    'CLP': '\u0024',
    'CNY': '\u00a5',
    'COP': '\u0024',
    'CRC': '\u20a1',
    'HRK': '\u006b\u006e',
    'CUP': '\u20b1',
    'CZK': '\u004b\u010d',
    'DKK': '\u006b\u0072',
    'DOP': '\u0052\u0044\u0024',
    'XCD': '\u0024',
    'EGP': '\u00a3',
    'SVC': '\u0024',
    'EEK': '\u006b\u0072',
    'EUR': '\u20ac',
    'FKP': '\u00a3',
    'FJD': '\u0024',
    'GHC': '\u00a2',
    'GIP': '\u00a3',
    'GTQ': '\u0051',
    'GGP': '\u00a3',
    'GYD': '\u0024',
    'HNL': '\u004c',
    'HKD': '\u0024',
    'HUF': '\u0046\u0074',
    'ISK': '\u006b\u0072',
    'INR': '\u20b9',
    'IDR': '\u0052\u0070',
    'IRR': '\ufdfc',
    'IMP': '\u00a3',
    'ILS': '\u20aa',
    'JMD': '\u004a\u0024',
    'JPY': '\u00a5',
    'JEP': '\u00a3',
    'KZT': '\u043b\u0432',
    'KPW': '\u20a9',
    'KRW': '\u20a9',
    'KGS': '\u043b\u0432',
    'LAK': '\u20ad',
    'LVL': '\u004c\u0073',
    'LBP': '\u00a3',
    'LRD': '\u0024',
    'LTL': '\u004c\u0074',
    'MKD': '\u0434\u0435\u043d',
    'MYR': '\u0052\u004d',
    'MUR': '\u20a8',
    'MXN': '\u0024',
    'MNT': '\u20ae',
    'MZN': '\u004d\u0054',
    'NAD': '\u0024',
    'NPR': '\u20a8',
    'ANG': '\u0192',
    'NZD': '\u0024',
    'NIO': '\u0043\u0024',
    'NGN': '\u20a6',
    'NOK': '\u006b\u0072',
    'OMR': '\ufdfc',
    'PKR': '\u20a8',
    'PAB': '\u0042\u002f\u002e',
    'PYG': '\u0047\u0073',
    'PEN': '\u0053\u002f\u002e',
    'PHP': '\u20b1',
    'PLN': '\u007a\u0142',
    'QAR': '\ufdfc',
    'RON': '\u006c\u0065\u0069',
    'RUB': '\u0440\u0443\u0431',
    'SHP': '\u00a3',
    'SAR': '\ufdfc',
    'RSD': '\u0414\u0438\u043d\u002e',
    'SCR': '\u20a8',
    'SGD': '\u0024',
    'SBD': '\u0024',
    'SOS': '\u0053',
    'ZAR': '\u0052',
    'LKR': '\u20a8',
    'SEK': '\u006b\u0072',
    'CHF': '\u0043\u0048\u0046',
    'SRD': '\u0024',
    'SYP': '\u00a3',
    'TWD': '\u004e\u0054\u0024',
    'THB': '\u0e3f',
    'TTD': '\u0054\u0054\u0024',
    'TRY': '\u20ba',
    'TRL': '\u20a4',
    'TVD': '\u0024',
    'UAH': '\u20b4',
    'GBP': '\u00a3',
    'USD': '\u0024',
    'UYU': '\u0024\u0055',
    'UZS': '\u043b\u0432',
    'VEF': '\u0042\u0073',
    'VND': '\u20ab',
    'YER': '\ufdfc',
    'ZWD': '\u005a\u0024'
  });


  /*
  @chalk
  
  @name Dynamic Date
  @description
   */

  dl.filter('dlDate', [
    '$filter', 'dlProvider', function($filter, dlProvider) {
      dlProvider.loadDateFilters();
      return function(date, locale, format) {
        var error, value;
        if (locale == null) {
          locale = 'en-us';
        }
        try {
          value = dlProvider.dateFilters[locale](date, format);
        } catch (_error) {
          error = _error;
          value = $filter('date')(date, format);
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

  dl.provider('dlProvider', [
    'dlConstant', function(dlConstant) {
      var currencyMap, defaultLocale, getModuleName, loadLocale, locales;
      defaultLocale = 'en-us';
      currencyMap = {
        'USD': 'en-us'
      };
      locales = ['en-us'];
      getModuleName = function(locale) {
        return "dynamic.locale." + locale;
      };
      loadLocale = function(locale, ngLocale) {
        var module;
        eval(ngLocale);
        module = angular.module(getModuleName(locale), []);
        return module._invokeQueue.push(angular.module(['ngLocale'])._invokeQueue[0]);
      };
      this.setCurrencyMap = function(supportedCurrencyMap) {
        return currencyMap = supportedCurrencyMap;
      };
      this.setDefaultLocale = function(locale) {
        return defaultLocale = locale;
      };
      this.setLocales = function(supportedLocales) {
        return locales = supportedLocales;
      };
      this.loadLocales = function(callback) {
        if (callback == null) {
          callback = angular.noop;
        }
        angular.forEach(locales, (function(_this) {
          return function(locale, key) {
            return loadLocale(locale, dlConstant[locale]);
          };
        })(this));
        if (dlConstant[defaultLocale] != null) {
          eval(dlConstant[defaultLocale]);
        } else {
          throw Error('defaultLocale must be in locales');
        }
        return callback.apply();
      };
      this.$get = function() {
        return {
          currencyFilters: {},
          dateFilters: {},
          getCurrencyMap: function() {
            return currencyMap;
          },
          getLocales: function() {
            return locales;
          },
          loadCurrencyFilters: function() {
            return angular.forEach(locales, (function(_this) {
              return function(locale, key) {
                return _this.currencyFilters[locale] = angular.injector(['ng', getModuleName(locale)]).get('$filter')('currency');
              };
            })(this));
          },
          loadDateFilters: function() {
            return angular.forEach(locales, (function(_this) {
              return function(locale, key) {
                return _this.dateFilters[locale] = angular.injector(['ng', getModuleName(locale)]).get('$filter')('date');
              };
            })(this));
          }
        };
      };
      return this;
    }
  ]);

  dl.constant("dlConstant", {
    "de": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"vorm.\",\n      \"nachm.\"\n    ],\n    \"DAY\": [\n      \"Sonntag\",\n      \"Montag\",\n      \"Dienstag\",\n      \"Mittwoch\",\n      \"Donnerstag\",\n      \"Freitag\",\n      \"Samstag\"\n    ],\n    \"MONTH\": [\n      \"Januar\",\n      \"Februar\",\n      \"M\u00e4rz\",\n      \"April\",\n      \"Mai\",\n      \"Juni\",\n      \"Juli\",\n      \"August\",\n      \"September\",\n      \"Oktober\",\n      \"November\",\n      \"Dezember\"\n    ],\n    \"SHORTDAY\": [\n      \"So.\",\n      \"Mo.\",\n      \"Di.\",\n      \"Mi.\",\n      \"Do.\",\n      \"Fr.\",\n      \"Sa.\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"M\u00e4r\",\n      \"Apr\",\n      \"Mai\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Okt\",\n      \"Nov\",\n      \"Dez\"\n    ],\n    \"fullDate\": \"EEEE, d. MMMM y\",\n    \"longDate\": \"d. MMMM y\",\n    \"medium\": \"dd.MM.yyyy HH:mm:ss\",\n    \"mediumDate\": \"dd.MM.yyyy\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"dd.MM.yy HH:mm\",\n    \"shortDate\": \"dd.MM.yy\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"\u20ac\",\n    \"DECIMAL_SEP\": \",\",\n    \"GROUP_SEP\": \".\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\u00a0\u00a4\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\u00a0\u00a4\"\n      }\n    ]\n  },\n  \"id\": \"de\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-ca": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, d MMMM, y\",\n    \"longDate\": \"d MMMM, y\",\n    \"medium\": \"yyyy-MM-dd h:mm:ss a\",\n    \"mediumDate\": \"yyyy-MM-dd\",\n    \"mediumTime\": \"h:mm:ss a\",\n    \"short\": \"yy-MM-dd h:mm a\",\n    \"shortDate\": \"yy-MM-dd\",\n    \"shortTime\": \"h:mm a\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\u00a4\",\n        \"negSuf\": \")\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-ca\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-gb": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, d MMMM y\",\n    \"longDate\": \"d MMMM y\",\n    \"medium\": \"d MMM y HH:mm:ss\",\n    \"mediumDate\": \"d MMM y\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"dd/MM/yyyy HH:mm\",\n    \"shortDate\": \"dd/MM/yyyy\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"\u00a3\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"\u00a4-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-gb\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-us": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, MMMM d, y\",\n    \"longDate\": \"MMMM d, y\",\n    \"medium\": \"MMM d, y h:mm:ss a\",\n    \"mediumDate\": \"MMM d, y\",\n    \"mediumTime\": \"h:mm:ss a\",\n    \"short\": \"M/d/yy h:mm a\",\n    \"shortDate\": \"M/d/yy\",\n    \"shortTime\": \"h:mm a\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\u00a4\",\n        \"negSuf\": \")\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-us\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "fr-ca": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"dimanche\",\n      \"lundi\",\n      \"mardi\",\n      \"mercredi\",\n      \"jeudi\",\n      \"vendredi\",\n      \"samedi\"\n    ],\n    \"MONTH\": [\n      \"janvier\",\n      \"f\u00e9vrier\",\n      \"mars\",\n      \"avril\",\n      \"mai\",\n      \"juin\",\n      \"juillet\",\n      \"ao\u00fbt\",\n      \"septembre\",\n      \"octobre\",\n      \"novembre\",\n      \"d\u00e9cembre\"\n    ],\n    \"SHORTDAY\": [\n      \"dim.\",\n      \"lun.\",\n      \"mar.\",\n      \"mer.\",\n      \"jeu.\",\n      \"ven.\",\n      \"sam.\"\n    ],\n    \"SHORTMONTH\": [\n      \"janv.\",\n      \"f\u00e9vr.\",\n      \"mars\",\n      \"avr.\",\n      \"mai\",\n      \"juin\",\n      \"juil.\",\n      \"ao\u00fbt\",\n      \"sept.\",\n      \"oct.\",\n      \"nov.\",\n      \"d\u00e9c.\"\n    ],\n    \"fullDate\": \"EEEE d MMMM y\",\n    \"longDate\": \"d MMMM y\",\n    \"medium\": \"yyyy-MM-dd HH:mm:ss\",\n    \"mediumDate\": \"yyyy-MM-dd\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"yy-MM-dd HH:mm\",\n    \"shortDate\": \"yy-MM-dd\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \",\",\n    \"GROUP_SEP\": \"\u00a0\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\",\n        \"negSuf\": \"\u00a0\u00a4)\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\u00a0\u00a4\"\n      }\n    ]\n  },\n  \"id\": \"fr-ca\",\n  \"pluralCat\": function (n) {  if (n >= 0 && n <= 2 && n != 2) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);"
  });

}).call(this);
