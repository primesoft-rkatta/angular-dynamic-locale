module.exports = (grunt) ->
  # load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  # time how long tasks take. can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    banner: """
    /**
     * <%= _.titleize(pkg.name) %> v<%= pkg.version %>
     *
     * @author: <%= pkg.author %>
     * @contributors: <%= pkg.contributors.join(', ') %>
     * @date: <%= grunt.template.today("yyyy-mm-dd") %>
     */\n\n
    """

  grunt.loadTasks 'grunt'

  grunt.registerTask 'default', 'Running development environment...', [
    'clean:prod'
    'chalkboard:src'
    'coffee:prod'
    'uglify:prod'
  ]
