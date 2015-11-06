 /*traversing*/
$("#btn1").click(function(){

 $("span").parents("div").css({"background-color": "red"});

}
 );

$("#btn2").click(function(){

 $("div").children().css({"background-color": "yellow"}); 

}
 );


$("#btn3").click(function(){

 $("div").find("span").css({"background-color": "green"}); 

}
 );

$("#btn4").click(function(){

 $("p").siblings("div").css({"background-color": "gray"}); 

}
 );

$("#btn5").click(function(){

 $("p").next().css({"background-color": "lightblue"}); 

}
 );

$("#btn6").click(function(){

 $("div").prev().css({"background-color": "lightblue"}); 

}
 );

$("#btn7").click(function(){

 $("div").prevAll().css({"background-color": "lightblue"}); 

}
 );

$("#btn8").click(function(){

 $("p").nextAll().css({"background-color": "yellow"}); 

}
 );

$("#btn9").click(function(){

 $("li").prevUntil("p").css({"background-color": "yellow"}); 

}
 );

$("#btn10").click(function(){

 $("p").nextUntil("li").css({"background-color": "blue"}); 

}
 );





