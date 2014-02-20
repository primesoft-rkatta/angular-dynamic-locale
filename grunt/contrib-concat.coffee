module.exports = (grunt) ->
  grunt.config 'concat',
    prod:
      files: [
        'tmp/i18n.coffee': 'i18n/**/*'
      ]
      options:
        banner: "dl.value \"dlValue\",\n"
        process: (src, filePath) ->
          matches = filePath.match /angular-locale_(.*?).js/

          locale = matches[1]

          return '' unless locale?

          content = src.replace /["]/g, '\\"'

          return "\"#{locale}\":" + "\"\"\"\n" + content + "\"\"\"\n"
