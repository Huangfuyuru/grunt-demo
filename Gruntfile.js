module.exports = function(grunt){
  grunt.initConfig({
    htmlhint:{
      //option是选项的意思
      options:{
        htmlhintrc:'./.htmlhintrc'
      },
      src:['*.html']
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('default',['htmlhint']);
};
