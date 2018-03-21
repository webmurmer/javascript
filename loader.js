/**
Vertigo Tip by www.vertigo-project.com
Requires jQuery
*/

this.fametip = function() {    
    this.xOffset = -20; // x distance from mouse
    this.yOffset = 20; // y distance from mouse       
    
    $(".tooltip").unbind().hover(    
        function(e) {
            this.t = this.title;
            this.title = ''; 
            this.top = (e.pageY + yOffset); this.left = (e.pageX + xOffset);
            
            $('body').append( '<p id="tooltip">' + this.t + '</p>' );
                        
            $('p#tooltip').css("top", this.top+"px").css("left", this.left+"px").fadeIn("slow");
            
        },
        function() {
            this.title = this.t;
            $("p#tooltip").fadeOut("slow").remove();
        }
    ).mousemove(
        function(e) {
            this.top = (e.pageY + yOffset);
            this.left = (e.pageX + xOffset);
                         
            $("p#tooltip").css("top", this.top+"px").css("left", this.left+"px");
        }
    );            
    
};

jQuery(document).ready(function($){fametip();}) 
$(document).ready(function () {

	//transitions
	//for more transition, goto http://gsgd.co.uk/sandbox/jquery/easing/
	var style = 'easeOutElastic';

	//Retrieve the selected item position and width
	var default_left = Math.round($('#lavaNavMenu li.selected').offset().left - $('#lavaNavMenu').offset().left);
	var default_width = $('#lavaNavMenu li.selected').width();

	//Set the floating bar position and width
	$('#box').css({left: default_left});
	$('#box .head').css({width: default_width});

	//if mouseover the menu item
	$('#lavaNavMenu li').hover(function () {
		
		//Get the position and width of the menu item
		left = Math.round($(this).offset().left - $('#lavaNavMenu').offset().left);
		width = $(this).width(); 
	$('#debug').html(left);
		//Set the floating bar position, width and transition
		$('#box').stop(false, true).animate({left: left},{duration:1000, easing: style});	
		$('#box .head').stop(false, true).animate({width:width},{duration:1000, easing: style});	
	
	//if user click on the menu
	}).click(function () {
		
		//reset the selected item
		$('#lavaNavMenu li').removeClass('selected');	
		
		//select the current item
		$(this).addClass('selected');

	});
	
	//If the mouse leave the menu, reset the floating bar to the selected item
	$('#lavaNavMenu').mouseleave(function () {

		//Retrieve the selected item position and width
		default_left = Math.round($('#lavaNavMenu li.selected').offset().left - $('#lavaNavMenu').offset().left);
		default_width = $('#lavaNavMenu li.selected').width();
		
		//Set the floating bar position, width and transition
		$('#box').stop(false, true).animate({left: default_left},{duration:1500, easing: style});	
		$('#box .head').stop(false, true).animate({width:default_width},{duration:1500, easing: style});		
		
	});
$(function(){
 $('#twitterbox').tweetable({username: 'webdesignsby', time: true, limit: 4});
});
});
