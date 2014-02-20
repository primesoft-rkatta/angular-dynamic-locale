###
@chalk

@name Dynamic Currency
@description

###

dl.filter "dlCurrency", [
  "$filter"
  "dlProvider"
  (
    $filter
    dlProvider
  ) ->
    dlProvider.loadCurrencyFilters()

    (amount, locale = "en-us", currencySymbol) ->
      try
        value = dlProvider.currencyFilters[locale] amount, currencySymbol
      catch error
        value = $filter("currency") amount, currencySymbol

      return value
]
