/*global Router */

Router.configure({
    layoutTemplate: "layout"
});

var noslide = function () {
  img_array = ['elefante_2.png'];
  this.next();
};
Router.onBeforeAction(noslide, {
  except: ['/']
});

Router.route("/", {
	action: function(){
		
	    this.render("home", {to:"main"});
	    
	    $("body").addClass("slider");
	    
		img_array = [
			'aguia_1.jpg', 
			'biplano_1.jpg', 
			'borboleta_1.jpg',
			'cavalos_2.jpg',
			'hercules_1.jpg',
			'polvo_3.jpg',
			'rino_1.jpg',
			'triceratops_1.jpg',
			'tubarao_1.jpg',
			'yakai_1.jpg'
		]; 
		var index = 0; 
		function fadeToNext(){ 
			index = (index + 1) % img_array.length; 
			$('body').css({'background-image':'url('+img_array[index]+')'}); 
			waitNext(); 
		}
		
		function waitNext(){ 
			setTimeout(function() { 
				fadeToNext();
			},7000);
		} waitNext();
	}
	
});

Router.route("/start", function(){
	this.render("intro", {to:"intro"});
    this.render("start", {to: "main"});
});

