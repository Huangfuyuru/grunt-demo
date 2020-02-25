module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      //option是选项的意思
      options:{
        configFile:'./.eslintrc.json'
      },
      src:['*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default',['eslint']);
};
