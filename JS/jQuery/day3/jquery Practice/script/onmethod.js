/*$("#inp1").on("blur", function (){
var txt = $("#inp1").val();
            txt = txt.substring(0, 1).toUpperCase() + txt.substring(1);
            $('#p1').html(txt);

})*/


$("#inp2").on("blur", function (){
var txt = $("#inp2").val();
            txt = txt.substring(0,txt.length-1)+ txt.substring(txt.length-1).toUpperCase() ;
            $('#p2').html(txt);

})

$("#inp1").on({ keypress:  function (){
                               var txt = $("#inp1").val();
                               txt = txt.charAt(0).toUpperCase() + txt.substring(1,txt.length-1)+ txt.charAt(txt.length-1).toUpperCase();
                                $('#p1').html(txt);},

                blur: function(){

                	       alert($('#p1').html());
                                      } ,

                focus: function(){
                                   $('#p1').css("background-color", "yellow");

                }                      

                                      });   



$("#btn1").click(function()
                 {$("#img1").hide(); } );  

$("#btn2").click(function()
                 {$("#img1").slideUp(3000, function(){ $("#btn2").hide();}); } );  

$("#btn3").click(function()
                 {$("#img1").slideDown(3000,function(){ $("#btn2").show();}); } );

$("#btn4").click(function()
                 {$("#img1").slideToggle(3000); } );  



//fadding effect

$("#btn5").click(function()
                 {$("#img1").fadeIn(7000); } );  

$("#btn6").click(function()
                 {$("#img1").fadeOut(7000); } );  

$("#btn7").click(function()
                 {$("#img1").fadeToggle(7000); } );

$("#btn8").click(function()
                 {$("#img1").hide("slow"); } );  

//opacity 

$("#opc1").click(function()
                 {$("#img1").fadeTo(3000, 0.1); } );  

$("#opc2").click(function()
                 {$("#img1").fadeTo("slow", 0.8); } );  

$("#opc3").click(function()
                 {$("#img1").fadeTo("fast",0.4); } );









                 