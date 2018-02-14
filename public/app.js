$(document).ready(function(){
$('button').on('click',function(){
  $('#heartdiv').attr('class','heart');   
    $('#linediv').attr('class','vl');
    setTimeout(function(){
        $('i').attr('class','fas fa-heart');
     $('#heartdiv').attr('class','heart1');   
    $('#linediv').attr('class','vl1');   
    },3500);

});
    
    
    
                            });