
//click on img change image
$("img").mouseenter(function(){         
        $("img").attr({ src: "img/img2.jpg" });
})

$("img").mouseleave(function(){
        $("img").attr({ src: "img/img1.jpg" });
    });
 
//lower case to uppercase

$('#inp').keyup(function(){
   $("#inp").val($("#inp").val().toUpperCase());
});




$('#inp1').blur(function(){

	alert("blur");
});
