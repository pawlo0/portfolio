Blog.config({
    // syntaxHighlighting: true
    // syntaxHighlightingTheme: 'github'
});



Template.start.onRendered( function(){
	
	$("body").scrollspy({ target: "#rightSidebar" });
	$('#rightSidebar').on('activate.bs.scrollspy', function () {
	  
	});	
	
	$('#rightNav').affix({
      offset: {
        top: 350
      }
	});
});

Template.header.onRendered( function(){
    $('[data-toggle="tooltip"]').tooltip();
});

Template.header.events({
    "click .js-scrollToFooter": function(event){
        $("html, body").animate({ scrollTop: $("#footer").offset().top }, 1000);
    }
})

Template.footer.events({
    "click .js-scrollToTop": function(event){
        $("html, body").animate({ scrollTop: $("body").offset().top }, 1000);
    }
})