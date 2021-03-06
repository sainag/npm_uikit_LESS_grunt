//Wrapper
module.exports = function(grunt){

  //Project and task configuration
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    concat:{
      js:{
        src: ['js/functions.js','js/google-analytics.js'],
        dest: 'js/main.js'
      }
    },
    uglify:{
      options:{
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd")%>  */\n'
      },
      build:{
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
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
    phpunit:{
      classes:{
        dir:'tests/php'
      },
      options:{
        bin: 'php/vendor/bin/phpunit',
        bootstrap:'php/email.php',
        color:true,
        testdox:true
      }
    },
    phpmd:{
      applicaiton:{
        dir:'php/email.php'
      },
      options:{
        bin: 'php/vendor/bin/phpmd',
        rulesets:'codesize,unusedcode,naming'
      }
    },
    'sftp-deploy':{
      build:{
        auth:{
          host:'libappdev.latrobe.edu.au',
          port:6022,
          authKey:'snkey'
        },
        src: 'C:/wamp/www/ebureau',
        dest:'/data/web/public_html/ebureau',
        exclusions: ['C:/wamp/www/ebureau/**/Thumbs.db','tests','node_modules','C:/wamp/www/ebureau/php/vendor'],
        serverSep: '/',
        localSep: '/',
        concurrency: 4,
        progress:true
      }
    },
    // /*******Source code publishing*****************/
    // scp:{
    //   options:{
    //     host:'libappdev.latrobe.edu.au',
    //     port:6022,
    //     username:'web',
    //   },
    //   libappdev: {
    //     files:[{
    //       cwd: 'tests',
    //       src:'*/*',
    //       dest:'/data/web/public_html/ebureau'
    //     }]
    //   }
    // },
    /********ftpush not working*****************/
    /*ftpush:{
      build:{
        auth:{
          host:'libappdev.latrobe.edu.au',
          port:6022,
          authKey:'sn'
        },
        src:'',
        dest:'/data/web/public_html/ebureau2',
        exclusions: ['/.git','/node_modules','/Thumbs.db','/books/Thumbs.db','*.DS_Store','/.ftppass','*.mp4','*.EXE'],
        keep:['/node_modules/uikit/dist'],
        simple:false,
        useList:false
      }
    },*/
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-phpmd');
  //grunt.loadNpmTasks('grunt-ftpush');
  //grunt.loadNpmTasks('grunt-scp');
  grunt.loadNpmTasks('grunt-sftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Default task(s).
  grunt.registerTask('default', ['less','concat','uglify','watch']);
};
