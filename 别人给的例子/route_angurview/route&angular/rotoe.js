$(document).ready(function(){

	$("#btn1").click(function(){
		 var mname= $("input").val();
            $.ajax({

                     type: "GET",
                     url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=bzm7bkpkkm4wghg22xdbx4vy&q="+ mname,
                     dataType: "jsonp",
                     success: function(response){
                    	 
                    		
                    	 var body = document.body;
                    	 $(body).append("<p> total: "+response.total+ "</p>")
                  		var table= $("<table> </table>").css({"border-color":"1px solid black", "background-color":"yellow"});
                  	     $("body").append(table);
                  	     
                  	    var tr= $("<tr> </tr>");
                  	   $(table).append(tr);
                  	   $(tr).append("<td>year </td> ");
                  	   $(tr).append("<td>"+response.movies[0].year+"</td>");
                  	   
                  	 var tr= $("<tr> </tr>");
                	   $(table).append(tr);
                	   $(tr).append("<td>title </td> ");
                	   $(tr).append("<td>"+response.movies[0].title+"</td>");
                	   
                	   var tr= $("<tr> </tr>");
                	   $(table).append(tr);
                	   $(tr).append("<td>critic socre </td> ");
                	   $(tr).append("<td>"+response.movies[0].ratings.critics_score+"</td>");
                	   
                	   var tr= $("<tr> </tr>");
                	   $(table).append(tr);
                	   $(tr).append("<td>Audiance socre </td> ");
                	   $(tr).append("<td>"+response.movies[0].ratings.audience_score+"</td>");
                       
                	   
                	   var tr= $("<tr> </tr>");
                	   $(table).append(tr);
                	   $(tr).append("<td>Poster </td> ");
                	   $(tr).append("<td>"+"<img  src="+ response.movies[0].posters.thumbnail+">"+"</td>");
                	  

                	 


                    		

                    	               	
                    	 
                    	  

                     },

                     error: function(){
                     	
                     }

             

            });
	});

	});
	