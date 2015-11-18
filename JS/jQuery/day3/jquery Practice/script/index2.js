$('#inp').blur(function(){
   $("#inp").val($("#inp").val().toUpperCase());
});

$('#inp').hover(function(){
  $("#inp").css("background-color", "yellow");
}, function () {
    $("#inp").css("background-color", "");

});


$('#inp').focus(function(){
  alert("focus- abc");
  
});

