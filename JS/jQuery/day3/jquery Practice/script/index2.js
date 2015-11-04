$('#inp').blur(function(){
   $("#inp").val($("#inp").val().toUpperCase());
});

$('#inp').hover(function(){
  $("#inp").css("background-color", "yellow");
});


$('#inp').focus(function(){
  alert("focus- abc");
  
});

