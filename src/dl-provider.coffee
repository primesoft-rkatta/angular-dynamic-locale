###
@chalk

@name Dynamic Locale Provider
@description

@todo Add configurability since it is a provider

###

dl.provider "dlProvider", ->
  ngLocaleMap = {}

  locales = [
    'en-us'
  ]

  currencyMap =
    "USD": "en-us"

  getFileName = (locale) ->
    return "/i18n/angular-locale_#{locale}.js"

  getModuleName = (locale) ->
    return "dynamic.locale.#{locale}"

  @setLocales = (locales) ->
    locales = locales

  @setCurrencyMap = (map) ->
    currencyMap = map

  @$get = [
    "$http"
    "$q"
    (
      $http
      $q
    ) ->
      currencyFilters: {}
      dateFilters:     {}

      loadLocales: (callback) ->
        promises = []

        angular.forEach locales, (locale, key) =>
          promises.push @loadLocale locale

        $q.all(promises).then (values) =>
          angular.forEach ngLocaleMap, (ngLocale, locale) =>
            eval ngLocale

            @addLocale locale, angular.module "ngLocale"

          callback.apply()

      loadLocale: (locale) ->
        file = getFileName locale

        $http.get(file)
          .success (data, status) ->
            ngLocaleMap[locale] = data
          .error (data, status) ->
            throw Error "#{status}: Failed to load #{file}."

      addLocale: (locale, ngLocaleModule) ->
        module = angular.module(getModuleName(locale), [])
        module._invokeQueue.push ngLocaleModule._invokeQueue[0]

      loadCurrencyFilters: ->
        angular.forEach locales, (locale, key) =>
          @currencyFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("currency")

      loadDateFilters: ->
        angular.forEach locales, (locale, key) =>
          @dateFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("date")
  ]

  return @
