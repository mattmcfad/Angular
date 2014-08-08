(function(){
	
	var app = angular.module('store',[]);

	app.controller('menuController',function(){
		// assign array of menu items to controllers property 'menu'
		this.menu = menu;
	});

	app.controller('imageController',function(){
		// initializes which image is selected
		this.selected = 0;
		
		this.hidden = false;

		//@param newSelection - integer representing which 
		//                      image in the images array is being displayed
		this.setSelected = function(newSelection){
			this.selected = newSelection;
		};

	});


})();






