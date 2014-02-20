# add dynamic.locale as a module depedency
app = angular.module "app", ['dynamic.locale']

# configure dlProviderProvider
app.config [
  "dlProviderProvider"
  (
    dlProviderProvider
  ) ->
    # set default locale (default: en-us)
    dlProviderProvider.setDefaultLocale 'en-us'

    # set available locales
    dlProviderProvider.setLocales [
      'de'
      'en-ca'
      'en-gb'
      'en-us'
    ]

    # create a currency map if you want to map currency codes to locale formats
    dlProviderProvider.setCurrencyMap
      'CAD': 'en-ca'
      'EUR': 'de'
      'GBP': 'en-gb'
      'USD': 'en-us'

    # load locales
    dlProviderProvider.loadLocales()
]

app.controller "AngularDynamicLocaleController", [
  "$scope"
  "dlProvider"
  (
    $scope
    dlProvider
  ) ->
    currencyMap = dlProvider.getCurrencyMap()

    # generate dummy data
    $scope.values = ({
      currency_code: Object.keys(currencyMap)[Math.floor Math.random() * 4]
      currency: parseFloat(Math.random() * (20 - 10) + 10).toFixed(2)
    } for x in [1..10000])
]
