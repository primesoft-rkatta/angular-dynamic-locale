module.exports = (grunt) ->
  grunt.config 'coffee',
    prod:
      files: [
        'dist/angular-dynamic-locale.js': [
          'src/dl-module.coffee'
          'src/**/*.coffee'
          'tmp/i18n.coffee'
        ]
      ]
      options:
        join: true
