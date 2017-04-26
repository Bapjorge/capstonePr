// JavaScript File
function checkCollision(){
    if($("#snowman").offset().top <  $("#fire").offset().top  + $("#fire").height()){
    
     $("#snowman").hide();
     alert("GAME OVER");}
}
$(document).ready(function(){
       var $pic = $("#pic3"); 
       var w = window.innerWidth - $("#fire").width();
       var score = 0;
       
        setInterval(function(){   
            checkCollision();
            
        
            if( $("#ground").offset().top >   $("#fire").offset().top + $("#fire").height()){
               

                   $("#fire").css("top", $("#fire").offset().top + 40 ); 

                } 
                else {
                    $("#fire").css("top", 6 ); $("#fire").css("left", Math.random()*w );
                    $("#box3").html(score += 1); 
                    console.log(score);
                }
            
            }, 75);
            
            
            

$("body").keydown(function( event ) {
      if (event.which === 37 && $("#snowman").offset().left > $("#ground").offset().left){
        $("#snowman").css("left", $("#snowman").offset().left - 35);
   
    }
    
    
    else if (event.which === 39 && $("#snowman").offset().left < ($("#ground").width()  - $("#snowman").width())) 
    {
     

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
