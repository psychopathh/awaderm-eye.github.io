var ww = window.screen.width;
if (ww<616) {
	var mw = 320; // min width of site
	var ratio =  ww / mw; //calculate ratio
	var viewport_meta_tag = document.getElementById('viewport');
	viewport_meta_tag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw);
	$(document).on('click', '.order_now', function(e){
		e.preventDefault();
		$('body, html').scrollTo($('.sidebar_side').offset().top-15, 700)
	});
}; 

$(document).ready(function(){
	$("body.page_cod").on("click","a[href^='#form']", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1);
	});
});