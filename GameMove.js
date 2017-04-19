// JavaScript File

$(document).ready(function(){
       var $pic = $("#pic3"); 
       
        setInterval(function(){
            
            //console.log($("#fire").offset().top);
            if( $("#ground").offset().top >   $("#fire").offset().top + $("#fire").height()){
                   // console.log($("#ground").offset().top);

                   $("#fire").css("top", $("#fire").offset().top + 40 ); 

                }
                else {
                    $("#fire").css("top", 0 ); 
                }
            
            }, 100);
            
$("body").keydown(function( event ) {
      if (event.which === 37 && $("#snowman").offset().left > $("#ground").offset().left){
        $("#snowman").css("left", $("#snowman").offset().left - 35);
   
    }
    
    
    else if (event.which === 39 && $("#snowman").offset().left < ($("#ground").width()  - $("#snowman").width())) 
    {
       //console.log( $("#ground").width())
       console.log( $("#snowman").width())
       //console.log($("#snowman").offset().left)

        $("#snowman").css("left", $("#snowman").offset().left + 35);
    } 
    else{
        return;
    
    }

});

 
   
  
});



//function checkCollision(){
    
    //var snowmove =$("#snowman").offset().top;
    
//}
