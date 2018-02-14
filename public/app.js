var tab=[];
var modelopen = false ; 
$(document).ready(function(){
    $.ajax({
       url:'https://compliment-generator-ga.herokuapp.com/compliments.json',
        type:'GET',
        success:function(data){tab=data;console.log(tab)},
        error:function(){alert('you know it wont work');}
    });
$('button').on('click',function(){
    $('.modal-content').empty();
    var i=Math.floor(Math.random()*(tab.length-1));
     $('i').attr('class','fas fa-anchor');
  $('#heartdiv').attr('class','heart');   
    $('#linediv').attr('class','vl');
    setTimeout(function(){
        $('i').attr('class','fas fa-heart');
     $('#heartdiv').attr('class','heart1');   
    $('#linediv').attr('class','vl1');  
    },3500);
    setTimeout(function(){
        $('i').attr('class','fas fa-anchor');
      $('.modal').css({'display':'block'});
      $('.modal-content').append(`<p>${tab[i].description}</p>`);
        setTimeout(function(){ modelopen=true;},1000);
    },7000);
    
});
    $(window).on('click',function(){
        if(modelopen){
            $('.modal').css({'display':'none'});
            modelopen=false;
        }});
});