module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/scripts/*.js'],
            options: {
                "forin": true,
                "latedef": true,
                "unused": true,
                "trailing": true
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/vendor/ProgressCircle.js', 'src/scripts/*.js'],
                dest: 'doony.js'
            }
        },

        uglify: {
            options: {
                mangle: {
                    except: ['ProgressCircle']
                },
                report: 'gzip',
                banner: '/* Doony v0.1 | (c) 2013 Kevin Burke | License: MIT */\n',
                compress: true
            },
            my_target: {
                files: {
                    'doony.min.js': ['doony.js']
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'src/styles/doony.css': 'src/styles/main.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },

        imageEmbed: {
            dist: {
                src: ['src/styles/doony.css'],
                dest: 'doony.css',
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/scripts/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            css: {
                files: ['src/styles/*.scss'],
                tasks: ['sass', 'imageEmbed']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-image-embed");
};

