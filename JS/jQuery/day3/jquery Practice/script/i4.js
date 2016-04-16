
$("#btn1").click(function(){

	var p=$("#sel").first().val();

alert(p);

});

$("#btn2").click(function(){

	var p=$("#div1 p").first().text();

alert(p);

});

$("#btn3").click(function(){

	var p=$("#div1 p").last().html();

alert(p);

});

$("#btn4").click(function(){

	var p=$("#div1 p:first").html();

alert(p);

});

$("#btn5").click(function(){

	var p=$("#div1 p:last").html();

alert(p);

});

$("#btn6").click(function(){

	var p=$(" p:first").html();

alert(p);

});

$("#btn7").click(function(){

	var p=$(" p:last").html();

alert(p);

});

$("#btn8").click(function(){

	var p=$("p .myP").text();

     alert(p);

});