module.exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments:true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dest/index.html'
      } 
    },
    cssmin:{
      'dest/rectangle.min.css':'rectangle.css'
    },
    uglify:{
      'dest/rectangle.min.js':'rectangle.js'
    } 
  });
 
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['htmlmin'])
}
