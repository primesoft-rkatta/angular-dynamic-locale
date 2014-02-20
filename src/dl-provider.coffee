###
@chalk

@name Dynamic Locale Provider
@description

@todo Add configurability since it is a provider

###

dl.provider "dlProvider", ->
  ngLocaleMap = {}

  defaultLocale = 'en-us'

  currencyMap =
    "USD": "en-us"

  locales = [
    'en-us'
  ]

  getModuleName = (locale) ->
    return "dynamic.locale.#{locale}"

  loadLocale = (locale, ngLocale) ->
    # set ngLocale
    eval ngLocale

    # create new module for locale
    module = angular.module(getModuleName(locale), [])
    module._invokeQueue.push angular.module(['ngLocale'])._invokeQueue[0]

  @setCurrencyMap = (map) ->
    currencyMap = map

  @setDefaultLocale = (locale) ->
    defaultLocale = locale

  @setLocales = (locales) ->
    locales = locales

  @loadLocales = (callback = angular.noop) ->
    dlValue = angular.injector(['dynamic.locale']).get "dlValue"

    angular.forEach locales, (locale, key) =>
      loadLocale locale, dlValue[locale]

    # set default locale
    if dlValue[defaultLocale]?
      eval dlValue[defaultLocale]
    else
      throw Error "defaultLocale must be in locales"

    callback.apply()

  @$get = ->
    currencyFilters: {}
    dateFilters:     {}

    loadCurrencyFilters: ->
      angular.forEach locales, (locale, key) =>
        @currencyFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("currency")

    loadDateFilters: ->
      angular.forEach locales, (locale, key) =>
        @dateFilters[locale] = angular.injector(["ng", getModuleName(locale)]).get("$filter")("date")

  return @
