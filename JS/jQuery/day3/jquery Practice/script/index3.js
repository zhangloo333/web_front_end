/*$("#img1").hover(function(){
     
     $(this).fadeOut("slow", function(){

     	$(this).attr({ src: "img/img2.jpg" }).fadeIn("slow");
     });


});*/
$("#btn1").mouseenter(function (){
$("#img1").animate({

	 left: '500px',
	 top: ' 100px',
	 opacity: '0.2'
	 
});

});