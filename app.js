(function(){
	var app = angular.module('store',[]);

	app.controller('menuController',function(){
		this.menu = menu;
	});

	app.controller('imageController',function(){
		//default image selected from menu.images[] array
		this.selected = 0;

		//Update the selected image in gallery
		//@param newSelection - integer referencing the image in menu.images[] array
		this.setSelected = function(newSelection){
			//switch the selected image to param
			this.selected = newSelection;
		};
	});


})();