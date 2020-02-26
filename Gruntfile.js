/*global module:true*/
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      //option是选项的意思
      options:{
        eslintrc:'./.eslintrc.json'
      },
      target:['*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default',['eslint']);
};
