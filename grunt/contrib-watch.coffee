module.exports = (grunt) ->
  grunt.config 'watch',
    coffee:
      files: 'src/**/*.coffee'
      tasks: [
        'coffee:prod'
      ]

    grunt:
      files: 'Gruntfile.coffee'

    options:
        interrupt: true

