//Wrapper
module.exports = function(grunt){

  //Project and task configuration
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    /*uglify:{
      options:{
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd")%>  \n' - this need be used before \n '* /''
      },
      build:{
        src: 'style.css',
        dest: 'style.min.css'
      }
    }*/
    less:{
      development:{
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files:{
          'css/main.css':['less/main.less'] /*source:desintation*/
        }
      }
    },
    watch:{
      styles:{
        files:['less/*.less'], // which files to watch
        tasks:['less'],
        options:{
          nospawn: true
        }
      }
    }
  });

  //loading grunt plugins
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Default task(s).
  grunt.registerTask('default', ['less','watch']);
};
