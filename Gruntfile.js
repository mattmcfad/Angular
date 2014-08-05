var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9000, //run on port 9000
					open: true //open browser					
				}
			}
		},
		//lint my jS
		jshint: {
			all: ['app.js']
		},
		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'style.css': 'main.styl'
				}
			}

		},
		//autoprefix CSS
		autoprefixer: {
			options: {
				cascade: true
			},
			single_file: {
				src: 'style.css'
			}
		},
		//watch file changes and recompile if necessary
		watch: {
			css: {//task
			    files: 'main.styl', //where to watch
			    tasks: ['stylus','autoprefixer'], 
			    options: {
			      livereload: true
			    }
			},
			javascript: {
				files: ['app.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//default task grunt will run...
	grunt.registerTask('default', ['jshint','connect','stylus','autoprefixer','watch']);

};