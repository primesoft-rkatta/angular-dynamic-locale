dl.constant "dlConstant",
"de":"""
'use strict';
angular.module(\"ngLocale\", [], [\"$provide\", function($provide) {
var PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};
$provide.value(\"$locale\", {
  \"DATETIME_FORMATS\": {
    \"AMPMS\": [
      \"vorm.\",
      \"nachm.\"
    ],
    \"DAY\": [
      \"Sonntag\",
      \"Montag\",
      \"Dienstag\",
      \"Mittwoch\",
      \"Donnerstag\",
      \"Freitag\",
      \"Samstag\"
    ],
    \"MONTH\": [
      \"Januar\",
      \"Februar\",
      \"M\u00e4rz\",
      \"April\",
      \"Mai\",
      \"Juni\",
      \"Juli\",
      \"August\",
      \"September\",
      \"Oktober\",
      \"November\",
      \"Dezember\"
    ],
    \"SHORTDAY\": [
      \"So.\",
      \"Mo.\",
      \"Di.\",
      \"Mi.\",
      \"Do.\",
      \"Fr.\",
      \"Sa.\"
    ],
    \"SHORTMONTH\": [
      \"Jan\",
      \"Feb\",
      \"M\u00e4r\",
      \"Apr\",
      \"Mai\",
      \"Jun\",
      \"Jul\",
      \"Aug\",
      \"Sep\",
      \"Okt\",
      \"Nov\",
      \"Dez\"
    ],
    \"fullDate\": \"EEEE, d. MMMM y\",
    \"longDate\": \"d. MMMM y\",
    \"medium\": \"dd.MM.yyyy HH:mm:ss\",
    \"mediumDate\": \"dd.MM.yyyy\",
    \"mediumTime\": \"HH:mm:ss\",
    \"short\": \"dd.MM.yy HH:mm\",
    \"shortDate\": \"dd.MM.yy\",
    \"shortTime\": \"HH:mm\"
  },
  \"NUMBER_FORMATS\": {
    \"CURRENCY_SYM\": \"\u20ac\",
    \"DECIMAL_SEP\": \",\",
    \"GROUP_SEP\": \".\",
    \"PATTERNS\": [
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 3,
        \"minFrac\": 0,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\",
        \"posPre\": \"\",
        \"posSuf\": \"\"
      },
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 2,
        \"minFrac\": 2,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\u00a0\u00a4\",
        \"posPre\": \"\",
        \"posSuf\": \"\u00a0\u00a4\"
      }
    ]
  },
  \"id\": \"de\",
  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
"""

"en-ca":"""
'use strict';
angular.module(\"ngLocale\", [], [\"$provide\", function($provide) {
var PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};
$provide.value(\"$locale\", {
  \"DATETIME_FORMATS\": {
    \"AMPMS\": [
      \"AM\",
      \"PM\"
    ],
    \"DAY\": [
      \"Sunday\",
      \"Monday\",
      \"Tuesday\",
      \"Wednesday\",
      \"Thursday\",
      \"Friday\",
      \"Saturday\"
    ],
    \"MONTH\": [
      \"January\",
      \"February\",
      \"March\",
      \"April\",
      \"May\",
      \"June\",
      \"July\",
      \"August\",
      \"September\",
      \"October\",
      \"November\",
      \"December\"
    ],
    \"SHORTDAY\": [
      \"Sun\",
      \"Mon\",
      \"Tue\",
      \"Wed\",
      \"Thu\",
      \"Fri\",
      \"Sat\"
    ],
    \"SHORTMONTH\": [
      \"Jan\",
      \"Feb\",
      \"Mar\",
      \"Apr\",
      \"May\",
      \"Jun\",
      \"Jul\",
      \"Aug\",
      \"Sep\",
      \"Oct\",
      \"Nov\",
      \"Dec\"
    ],
    \"fullDate\": \"EEEE, d MMMM, y\",
    \"longDate\": \"d MMMM, y\",
    \"medium\": \"yyyy-MM-dd h:mm:ss a\",
    \"mediumDate\": \"yyyy-MM-dd\",
    \"mediumTime\": \"h:mm:ss a\",
    \"short\": \"yy-MM-dd h:mm a\",
    \"shortDate\": \"yy-MM-dd\",
    \"shortTime\": \"h:mm a\"
  },
  \"NUMBER_FORMATS\": {
    \"CURRENCY_SYM\": \"$\",
    \"DECIMAL_SEP\": \".\",
    \"GROUP_SEP\": \",\",
    \"PATTERNS\": [
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 3,
        \"minFrac\": 0,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\",
        \"posPre\": \"\",
        \"posSuf\": \"\"
      },
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 2,
        \"minFrac\": 2,
        \"minInt\": 1,
        \"negPre\": \"(\u00a4\",
        \"negSuf\": \")\",
        \"posPre\": \"\u00a4\",
        \"posSuf\": \"\"
      }
    ]
  },
  \"id\": \"en-ca\",
  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
"""

"en-gb":"""
'use strict';
angular.module(\"ngLocale\", [], [\"$provide\", function($provide) {
var PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};
$provide.value(\"$locale\", {
  \"DATETIME_FORMATS\": {
    \"AMPMS\": [
      \"AM\",
      \"PM\"
    ],
    \"DAY\": [
      \"Sunday\",
      \"Monday\",
      \"Tuesday\",
      \"Wednesday\",
      \"Thursday\",
      \"Friday\",
      \"Saturday\"
    ],
    \"MONTH\": [
      \"January\",
      \"February\",
      \"March\",
      \"April\",
      \"May\",
      \"June\",
      \"July\",
      \"August\",
      \"September\",
      \"October\",
      \"November\",
      \"December\"
    ],
    \"SHORTDAY\": [
      \"Sun\",
      \"Mon\",
      \"Tue\",
      \"Wed\",
      \"Thu\",
      \"Fri\",
      \"Sat\"
    ],
    \"SHORTMONTH\": [
      \"Jan\",
      \"Feb\",
      \"Mar\",
      \"Apr\",
      \"May\",
      \"Jun\",
      \"Jul\",
      \"Aug\",
      \"Sep\",
      \"Oct\",
      \"Nov\",
      \"Dec\"
    ],
    \"fullDate\": \"EEEE, d MMMM y\",
    \"longDate\": \"d MMMM y\",
    \"medium\": \"d MMM y HH:mm:ss\",
    \"mediumDate\": \"d MMM y\",
    \"mediumTime\": \"HH:mm:ss\",
    \"short\": \"dd/MM/yyyy HH:mm\",
    \"shortDate\": \"dd/MM/yyyy\",
    \"shortTime\": \"HH:mm\"
  },
  \"NUMBER_FORMATS\": {
    \"CURRENCY_SYM\": \"\u00a3\",
    \"DECIMAL_SEP\": \".\",
    \"GROUP_SEP\": \",\",
    \"PATTERNS\": [
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 3,
        \"minFrac\": 0,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\",
        \"posPre\": \"\",
        \"posSuf\": \"\"
      },
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 2,
        \"minFrac\": 2,
        \"minInt\": 1,
        \"negPre\": \"\u00a4-\",
        \"negSuf\": \"\",
        \"posPre\": \"\u00a4\",
        \"posSuf\": \"\"
      }
    ]
  },
  \"id\": \"en-gb\",
  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
"""

"en-us":"""
'use strict';
angular.module(\"ngLocale\", [], [\"$provide\", function($provide) {
var PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};
$provide.value(\"$locale\", {
  \"DATETIME_FORMATS\": {
    \"AMPMS\": [
      \"AM\",
      \"PM\"
    ],
    \"DAY\": [
      \"Sunday\",
      \"Monday\",
      \"Tuesday\",
      \"Wednesday\",
      \"Thursday\",
      \"Friday\",
      \"Saturday\"
    ],
    \"MONTH\": [
      \"January\",
      \"February\",
      \"March\",
      \"April\",
      \"May\",
      \"June\",
      \"July\",
      \"August\",
      \"September\",
      \"October\",
      \"November\",
      \"December\"
    ],
    \"SHORTDAY\": [
      \"Sun\",
      \"Mon\",
      \"Tue\",
      \"Wed\",
      \"Thu\",
      \"Fri\",
      \"Sat\"
    ],
    \"SHORTMONTH\": [
      \"Jan\",
      \"Feb\",
      \"Mar\",
      \"Apr\",
      \"May\",
      \"Jun\",
      \"Jul\",
      \"Aug\",
      \"Sep\",
      \"Oct\",
      \"Nov\",
      \"Dec\"
    ],
    \"fullDate\": \"EEEE, MMMM d, y\",
    \"longDate\": \"MMMM d, y\",
    \"medium\": \"MMM d, y h:mm:ss a\",
    \"mediumDate\": \"MMM d, y\",
    \"mediumTime\": \"h:mm:ss a\",
    \"short\": \"M/d/yy h:mm a\",
    \"shortDate\": \"M/d/yy\",
    \"shortTime\": \"h:mm a\"
  },
  \"NUMBER_FORMATS\": {
    \"CURRENCY_SYM\": \"$\",
    \"DECIMAL_SEP\": \".\",
    \"GROUP_SEP\": \",\",
    \"PATTERNS\": [
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 3,
        \"minFrac\": 0,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\",
        \"posPre\": \"\",
        \"posSuf\": \"\"
      },
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 2,
        \"minFrac\": 2,
        \"minInt\": 1,
        \"negPre\": \"(\u00a4\",
        \"negSuf\": \")\",
        \"posPre\": \"\u00a4\",
        \"posSuf\": \"\"
      }
    ]
  },
  \"id\": \"en-us\",
  \"pluralCat\": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
"""

"fr-ca":"""
'use strict';
angular.module(\"ngLocale\", [], [\"$provide\", function($provide) {
var PLURAL_CATEGORY = {ZERO: \"zero\", ONE: \"one\", TWO: \"two\", FEW: \"few\", MANY: \"many\", OTHER: \"other\"};
$provide.value(\"$locale\", {
  \"DATETIME_FORMATS\": {
    \"AMPMS\": [
      \"AM\",
      \"PM\"
    ],
    \"DAY\": [
      \"dimanche\",
      \"lundi\",
      \"mardi\",
      \"mercredi\",
      \"jeudi\",
      \"vendredi\",
      \"samedi\"
    ],
    \"MONTH\": [
      \"janvier\",
      \"f\u00e9vrier\",
      \"mars\",
      \"avril\",
      \"mai\",
      \"juin\",
      \"juillet\",
      \"ao\u00fbt\",
      \"septembre\",
      \"octobre\",
      \"novembre\",
      \"d\u00e9cembre\"
    ],
    \"SHORTDAY\": [
      \"dim.\",
      \"lun.\",
      \"mar.\",
      \"mer.\",
      \"jeu.\",
      \"ven.\",
      \"sam.\"
    ],
    \"SHORTMONTH\": [
      \"janv.\",
      \"f\u00e9vr.\",
      \"mars\",
      \"avr.\",
      \"mai\",
      \"juin\",
      \"juil.\",
      \"ao\u00fbt\",
      \"sept.\",
      \"oct.\",
      \"nov.\",
      \"d\u00e9c.\"
    ],
    \"fullDate\": \"EEEE d MMMM y\",
    \"longDate\": \"d MMMM y\",
    \"medium\": \"yyyy-MM-dd HH:mm:ss\",
    \"mediumDate\": \"yyyy-MM-dd\",
    \"mediumTime\": \"HH:mm:ss\",
    \"short\": \"yy-MM-dd HH:mm\",
    \"shortDate\": \"yy-MM-dd\",
    \"shortTime\": \"HH:mm\"
  },
  \"NUMBER_FORMATS\": {
    \"CURRENCY_SYM\": \"$\",
    \"DECIMAL_SEP\": \",\",
    \"GROUP_SEP\": \"\u00a0\",
    \"PATTERNS\": [
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 3,
        \"minFrac\": 0,
        \"minInt\": 1,
        \"negPre\": \"-\",
        \"negSuf\": \"\",
        \"posPre\": \"\",
        \"posSuf\": \"\"
      },
      {
        \"gSize\": 3,
        \"lgSize\": 3,
        \"macFrac\": 0,
        \"maxFrac\": 2,
        \"minFrac\": 2,
        \"minInt\": 1,
        \"negPre\": \"(\",
        \"negSuf\": \"\u00a0\u00a4)\",
        \"posPre\": \"\",
        \"posSuf\": \"\u00a0\u00a4\"
      }
    ]
  },
  \"id\": \"fr-ca\",
  \"pluralCat\": function (n) {  if (n >= 0 && n <= 2 && n != 2) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
"""
