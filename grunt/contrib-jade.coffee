module.exports = (grunt) ->
  grunt.config 'jade',
    dev:
      files: [
        'tmp/index.html': 'src/index.jade'
      ]
