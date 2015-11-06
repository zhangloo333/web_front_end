/**
 * 
 */
$(document).ready(function(){
	$("#btn").click(function(){
	$("#tid").css("visibility","visible");
	
$.ajax({
	type:"GET",
	url:"Students.json",
    dataType:"json",
    success:function(students){
    	for (var i = 0; i < students.length; i++) {
	        var names = students[i].name;
	        var countries = students[i].country;
	        var ages = students[i].age;
	        var images = students[i].image;
	
	
	    var row = $("<tr />");
	    $("#tid").append(row);
	    row.append($("<td>" + names + "</td>"));
	    row.append($("<td>" + countries + "</td>"));
	    row.append($("<td>" + ages + "</td>"));
	    row.append("<img class = 'img1' src=" +images+ ">");
}
    	alert(students[0].name);
    	
    },
    error:function(){
    	
    }
});


	
		
	});
});


