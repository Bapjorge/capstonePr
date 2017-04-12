// JavaScript File

$(document).ready(function(){
       var $pic = $("#pic3"); 
       
        setInterval(function(){
            
            console.log($("#ground").offset().top);
            if( $("#ground").offset().top >   $("#fire").offset().top ){
                    console.log($("#ground").offset().top);

                   $("#fire").css("top", $("#fire").offset().top + 40 ); 

                }
                else {
                    $("#fire").css("top", 0 ); 
                }
            
            }, 100);
            
});