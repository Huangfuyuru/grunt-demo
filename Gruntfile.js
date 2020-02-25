module.exports = function(grunt){
  grunt.initConfig({
    csslint:{
      //option是选项的意思
      options:{
        csslintrc:'./.csslintrc'
      },
      src:['*.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default',['csslint']);
};
