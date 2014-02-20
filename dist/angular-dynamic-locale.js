
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

  dl.provider("dlProvider", [
    "dlValue", function(dlValue) {
      var currencyMap, defaultLocale, getModuleName, locales, ngLocaleMap;
      ngLocaleMap = {};
      defaultLocale = 'en-us';
      currencyMap = {
        "USD": "en-us"
      };
      locales = ['en-us'];
      getModuleName = function(locale) {
        return "dynamic.locale." + locale;
      };
      this.setCurrencyMap = function(map) {
        return currencyMap = map;
      };
      this.setDefaultLocale = function(locale) {
        return defaultLocale = locale;
      };
      this.setLocales = function(locales) {
        return locales = locales;
      };
      this.loadLocales = function(callback) {
        angular.forEach(locales, (function(_this) {
          return function(locale, key) {
            return _this.loadLocale(locale);
          };
        })(this));
        if (dlValue[defaultLocale] != null) {
          eval(dlValue[defaultLocale]);
        } else {
          throw Error("defaultLocale must be in locales");
        }
        return callback.apply();
      };
      this.loadLocale = function(locale) {
        var module;
        eval(dlValue[locale]);
        module = angular.module(getModuleName(locale), []);
        return module._invokeQueue.push(ngLocaleModule._invokeQueue[0]);
      };
      this.$get = [
        "$q", function($q) {
          return {
            currencyFilters: {},
            dateFilters: {},
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
    }
  ]);

  dl.value("dlValue", {
    "de": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"vorm.\",\n      \"nachm.\"\n    ],\n    \"DAY\": [\n      \"Sonntag\",\n      \"Montag\",\n      \"Dienstag\",\n      \"Mittwoch\",\n      \"Donnerstag\",\n      \"Freitag\",\n      \"Samstag\"\n    ],\n    \"MONTH\": [\n      \"Januar\",\n      \"Februar\",\n      \"M\u00e4rz\",\n      \"April\",\n      \"Mai\",\n      \"Juni\",\n      \"Juli\",\n      \"August\",\n      \"September\",\n      \"Oktober\",\n      \"November\",\n      \"Dezember\"\n    ],\n    \"SHORTDAY\": [\n      \"So.\",\n      \"Mo.\",\n      \"Di.\",\n      \"Mi.\",\n      \"Do.\",\n      \"Fr.\",\n      \"Sa.\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"M\u00e4r\",\n      \"Apr\",\n      \"Mai\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Okt\",\n      \"Nov\",\n      \"Dez\"\n    ],\n    \"fullDate\": \"EEEE, d. MMMM y\",\n    \"longDate\": \"d. MMMM y\",\n    \"medium\": \"dd.MM.yyyy HH:mm:ss\",\n    \"mediumDate\": \"dd.MM.yyyy\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"dd.MM.yy HH:mm\",\n    \"shortDate\": \"dd.MM.yy\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"\u20ac\",\n    \"DECIMAL_SEP\": \",\",\n    \"GROUP_SEP\": \".\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\u00a0\u00a4\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\u00a0\u00a4\"\n      }\n    ]\n  },\n  \"id\": \"de\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-ca": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, d MMMM, y\",\n    \"longDate\": \"d MMMM, y\",\n    \"medium\": \"yyyy-MM-dd h:mm:ss a\",\n    \"mediumDate\": \"yyyy-MM-dd\",\n    \"mediumTime\": \"h:mm:ss a\",\n    \"short\": \"yy-MM-dd h:mm a\",\n    \"shortDate\": \"yy-MM-dd\",\n    \"shortTime\": \"h:mm a\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\u00a4\",\n        \"negSuf\": \")\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-ca\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-gb": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, d MMMM y\",\n    \"longDate\": \"d MMMM y\",\n    \"medium\": \"d MMM y HH:mm:ss\",\n    \"mediumDate\": \"d MMM y\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"dd/MM/yyyy HH:mm\",\n    \"shortDate\": \"dd/MM/yyyy\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"\u00a3\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"\u00a4-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-gb\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "en-us": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"Sunday\",\n      \"Monday\",\n      \"Tuesday\",\n      \"Wednesday\",\n      \"Thursday\",\n      \"Friday\",\n      \"Saturday\"\n    ],\n    \"MONTH\": [\n      \"January\",\n      \"February\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\"\n    ],\n    \"SHORTDAY\": [\n      \"Sun\",\n      \"Mon\",\n      \"Tue\",\n      \"Wed\",\n      \"Thu\",\n      \"Fri\",\n      \"Sat\"\n    ],\n    \"SHORTMONTH\": [\n      \"Jan\",\n      \"Feb\",\n      \"Mar\",\n      \"Apr\",\n      \"May\",\n      \"Jun\",\n      \"Jul\",\n      \"Aug\",\n      \"Sep\",\n      \"Oct\",\n      \"Nov\",\n      \"Dec\"\n    ],\n    \"fullDate\": \"EEEE, MMMM d, y\",\n    \"longDate\": \"MMMM d, y\",\n    \"medium\": \"MMM d, y h:mm:ss a\",\n    \"mediumDate\": \"MMM d, y\",\n    \"mediumTime\": \"h:mm:ss a\",\n    \"short\": \"M/d/yy h:mm a\",\n    \"shortDate\": \"M/d/yy\",\n    \"shortTime\": \"h:mm a\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \".\",\n    \"GROUP_SEP\": \",\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\u00a4\",\n        \"negSuf\": \")\",\n        \"posPre\": \"\u00a4\",\n        \"posSuf\": \"\"\n      }\n    ]\n  },\n  \"id\": \"en-us\",\n  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);",
    "fr-ca": "'use strict';\nangular.module(\"ngLocale\", [], [\"$provide\", function($provide) {\nvar PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};\n$provide.value(\"$locale\", {\n  \"DATETIME_FORMATS\": {\n    \"AMPMS\": [\n      \"AM\",\n      \"PM\"\n    ],\n    \"DAY\": [\n      \"dimanche\",\n      \"lundi\",\n      \"mardi\",\n      \"mercredi\",\n      \"jeudi\",\n      \"vendredi\",\n      \"samedi\"\n    ],\n    \"MONTH\": [\n      \"janvier\",\n      \"f\u00e9vrier\",\n      \"mars\",\n      \"avril\",\n      \"mai\",\n      \"juin\",\n      \"juillet\",\n      \"ao\u00fbt\",\n      \"septembre\",\n      \"octobre\",\n      \"novembre\",\n      \"d\u00e9cembre\"\n    ],\n    \"SHORTDAY\": [\n      \"dim.\",\n      \"lun.\",\n      \"mar.\",\n      \"mer.\",\n      \"jeu.\",\n      \"ven.\",\n      \"sam.\"\n    ],\n    \"SHORTMONTH\": [\n      \"janv.\",\n      \"f\u00e9vr.\",\n      \"mars\",\n      \"avr.\",\n      \"mai\",\n      \"juin\",\n      \"juil.\",\n      \"ao\u00fbt\",\n      \"sept.\",\n      \"oct.\",\n      \"nov.\",\n      \"d\u00e9c.\"\n    ],\n    \"fullDate\": \"EEEE d MMMM y\",\n    \"longDate\": \"d MMMM y\",\n    \"medium\": \"yyyy-MM-dd HH:mm:ss\",\n    \"mediumDate\": \"yyyy-MM-dd\",\n    \"mediumTime\": \"HH:mm:ss\",\n    \"short\": \"yy-MM-dd HH:mm\",\n    \"shortDate\": \"yy-MM-dd\",\n    \"shortTime\": \"HH:mm\"\n  },\n  \"NUMBER_FORMATS\": {\n    \"CURRENCY_SYM\": \"$\",\n    \"DECIMAL_SEP\": \",\",\n    \"GROUP_SEP\": \"\u00a0\",\n    \"PATTERNS\": [\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 3,\n        \"minFrac\": 0,\n        \"minInt\": 1,\n        \"negPre\": \"-\",\n        \"negSuf\": \"\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\"\n      },\n      {\n        \"gSize\": 3,\n        \"lgSize\": 3,\n        \"macFrac\": 0,\n        \"maxFrac\": 2,\n        \"minFrac\": 2,\n        \"minInt\": 1,\n        \"negPre\": \"(\",\n        \"negSuf\": \"\u00a0\u00a4)\",\n        \"posPre\": \"\",\n        \"posSuf\": \"\u00a0\u00a4\"\n      }\n    ]\n  },\n  \"id\": \"fr-ca\",\n  \"pluralCat\": function (n) {  if (n >= 0 && n <= 2 && n != 2) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}\n});\n}]);"
  });

}).call(this);
