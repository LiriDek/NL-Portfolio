/*	gallery */
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }

          if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
      }
        $(this).addClass("active");
      });
});
/*	end gallery */

$(document).ready(function(){
  $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
  });
});
 

            /*
            Neon Lights Text
            By JavaScript Kit (http://javascriptkit.com)
            Over 400+ free scripts here!
            */
            
           var message=" Mon travail consiste a trouver l'essence qui se trouve en chacun de nous"
           var neonbasecolor="gray"
           var neontextcolor="purple"
           var flashspeed=100
           //in milliseconds
           
           ///No need to edit below this line/////
           
           var n=0
           if (document.all||document.getElementById){
           document.write('')
           for (m=0;m<message.length;m++)
           document.write('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
           document.write('')
           }
           else
           document.write(message)
           
           function crossref(number){
           var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
           return crossobj
           }
           
           function neon(){
           
           //Change all letters to base color
           if (n==0){
           for (m=0;m<message.length;m++)
           //eval("document.all.neonlight"+m).style.color=neonbasecolor
           crossref(m).style.color=neonbasecolor
           }
           
           //cycle through and change individual letters to neon color
           crossref(n).style.color=neontextcolor
           
           if (n<message.length-1)
           n++
           else{
           n=0
           clearInterval(flashing)
           setTimeout("beginneon()",1500)
           return
           }
           }
           
           function beginneon(){
           if (document.all||document.getElementById)
           flashing=setInterval("neon()",flashspeed)
           }
           beginneon()
           